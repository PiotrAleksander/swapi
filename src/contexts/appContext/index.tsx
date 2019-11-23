import React, { createContext, ReactNode, FC } from "react";
import { fetchResource } from "../../services/swapi";
import { ResourceType } from "../../types/enums/ResourceTypeEnum";
import { IAppContext } from "../../types/interfaces/IAppContext";

const initialAppContext: IAppContext = {
  resourceType: ResourceType.PEOPLE,
  resources: [],
  counter: [0, 0],
  onShuffle: fetchResource
};

const AppContext = createContext<IAppContext>(initialAppContext);
const { Consumer: AppConsumer } = AppContext;

const AppProvider: FC<IAppContext & ReactNode> = ({
  resourceType,
  resources,
  counter,
  onShuffle,
  children
}) => {
  return (
    <AppContext.Provider
      value={{
        resourceType,
        resources,
        counter,
        onShuffle
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppConsumer };
export default AppContext;
