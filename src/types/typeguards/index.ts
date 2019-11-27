import {
  Resource,
  IPeopleResource,
  IStarshipResource,
  INotFound
} from "../Resource";

export const isPeopleResource = (
  resource: Resource
): resource is IPeopleResource => {
  return (resource as IPeopleResource).mass !== undefined;
};

export const isStarshipResource = (
  resource: Resource
): resource is IStarshipResource => {
  return (resource as IStarshipResource).crew !== undefined;
};

export const isNotFound = (resource: Resource): resource is INotFound => {
  return (resource as INotFound).detail !== undefined;
};
