import {
  IPeopleResource,
  IStarshipResource,
  INotFound
} from "../interfaces/IResource";

export const isPeopleResource = (
  resource: IPeopleResource | IStarshipResource | INotFound
): resource is IPeopleResource => {
  return (resource as IPeopleResource).mass !== undefined;
};

export const isStarshipResource = (
  resource: IPeopleResource | IStarshipResource | INotFound
): resource is IStarshipResource => {
  return (resource as IStarshipResource).crew !== undefined;
};

export const isNotFound = (
  resource: IPeopleResource | IStarshipResource | INotFound
): resource is INotFound => {
  return (resource as INotFound).detail !== undefined;
};
