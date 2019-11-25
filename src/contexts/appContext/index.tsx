import React, {
  createContext,
  ReactNode,
  useState,
  useRef,
  useEffect,
  useCallback,
  Context
} from "react";
import { ResourceType } from "../../types/enums/ResourceTypeEnum";
import { IAppContext } from "../../types/interfaces/IAppContext";
import api from "../../services/swapi";
import { firstStarship, secondStarship } from "../../../mocks";

const initialAppContext: IAppContext = {
  resourceType: ResourceType.PEOPLE,
  setResourceType: () => {},
  resources: [firstStarship, secondStarship],
  counter: [0, 0],
  setCounter: () => {},
  onShuffle: () => {}
};

let AppContext: Context<IAppContext>;
const { Provider, Consumer: AppConsumer } = (AppContext = createContext<
  IAppContext
>(initialAppContext));

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [resourceType, setResourceType] = useState(ResourceType.PEOPLE);
  const [resources, setResources] = useState();
  const [counter, setCounter] = useState([0, 0]);
  const [isSending, setIsSending] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      // set unmounted on cleanup
      isMounted.current = false;
    };
  }, []);

  const onShuffle = useCallback(async () => {
    // don't send if sending already in progress
    if (isSending) return;
    setIsSending(true);
    // send the request
    const firstIndex = Math.round(Math.random() * 10);
    const secondIndex = Math.round(Math.random() * 10);
    const firstResourcePromise = api.fetchResource(resourceType, firstIndex);
    const secondResourcePromise = api.fetchResource(resourceType, secondIndex);
    const [firstResource, secondResource] = await Promise.all([
      firstResourcePromise,
      secondResourcePromise
    ]);
    setResources([firstResource, secondResource]);
    if (isMounted.current)
      // only update if the provider is still mounted
      setIsSending(false);
  }, [isSending, resourceType]); // update the callback if sending or resource type changes

  return (
    <Provider
      value={{
        resourceType,
        setResourceType,
        resources,
        counter,
        setCounter,
        onShuffle
      }}
    >
      {children}
    </Provider>
  );
};

export { AppProvider, AppConsumer };
export default AppContext;
