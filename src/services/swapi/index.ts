import { ResourceType } from "../../types/enums/ResourceTypeEnum";
import { Resource } from "../../types/Resource";

export const BASE_URL = "https://swapi.co/api";

export const api = (url: string) => {
  const fetchResourceCount = async (
    resourceType = ResourceType.PEOPLE
  ): Promise<number> => {
    const response = await fetch(
      `${url}/${ResourceType[resourceType].toLowerCase()}/`,
      {
        mode: "no-cors"
      }
    );
    const result = await response.json();
    return result.count;
  };

  const fetchResource = async (
    resourceType = ResourceType.PEOPLE,
    index = 0
  ): Promise<Resource> => {
    const response = await fetch(
      `${url}/${ResourceType[resourceType].toLowerCase()}/${index}/`,
      {
        mode: "no-cors"
      }
    );
    const result = await response.json();
    return result;
  };

  return {
    fetchResourceCount,
    fetchResource
  };
};

export default api(BASE_URL);
