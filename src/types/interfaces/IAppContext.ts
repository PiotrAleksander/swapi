import { ResourceType } from "../enums/ResourceTypeEnum";
import { IPeopleResource, IStarshipResource, INotFound } from "./IResource";
import { Dispatch, SetStateAction } from "react";

export interface IAppContext {
  resourceType: ResourceType;
  setCounter: Dispatch<SetStateAction<Array<number>>>;
  setResourceType: Dispatch<SetStateAction<ResourceType>>;
  resources: Array<IPeopleResource | IStarshipResource | INotFound>;
  onShuffle(): void;
  counter: Array<number>;
  isSending: boolean;
}
