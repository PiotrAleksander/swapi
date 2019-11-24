import { ResourceType } from "../../types/enums/ResourceTypeEnum";
import {
  IPeopleResource,
  IStarshipResource
} from "../../types/interfaces/IResource";

export const BASE_URL = "https://swapi.co/api";

export const api = (url: string) => {
  const fetchResourceCount = async (
    resourceType = ResourceType.PEOPLE
  ): Promise<number> => {
    const response = await fetch(
      `${url}/${ResourceType[resourceType].toLowerCase()}/`
    );
    const result = await response.json();
    return result.count;
  };

  const fetchResource = async (
    resourceType = ResourceType.PEOPLE,
    index = 0
  ): Promise<IPeopleResource | IStarshipResource> => {
    const response = await fetch(
      `${url}/${ResourceType[resourceType].toLowerCase()}/${index}/`
    );
    const result = await response.json();
    return result[0];
  };

  return {
    fetchResourceCount,
    fetchResource
  };
};

export default api(BASE_URL);
