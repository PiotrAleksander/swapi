import { ResourceType } from "../enums/ResourceTypeEnum";
import { IPeopleResource, IStarshipResource } from "./IResource";
import { Dispatch, SetStateAction } from "react";

export interface IAppContext {
  resourceType: ResourceType;
  setCounter: Dispatch<SetStateAction<Array<number>>>;
  setResourceType: Dispatch<SetStateAction<ResourceType>>;
  resources: Array<IPeopleResource | IStarshipResource>;
  onShuffle(): void;
  counter: Array<number>;
}
