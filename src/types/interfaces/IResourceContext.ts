import { ResourceType } from "../enums/ResourceTypeEnum";
import { IPeopleResource, IStarshipResource } from "./IResource";

export interface IResourceContext {
  resourceType: ResourceType;
  resources: Array<IPeopleResource | IStarshipResource>;
  onShuffle(resourceType: ResourceType): void;
  counter: Array<number>;
}
