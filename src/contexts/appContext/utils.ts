import { ResourceType } from "../../types/enums/ResourceTypeEnum";
import api from "../../services/swapi";
import { Resource } from "../../types/Resource";
import {
  isPeopleResource,
  isStarshipResource,
  isNotFound
} from "../../types/typeguards";
import { Dispatch, SetStateAction } from "react";

export const fetchResources = async (resourceType: ResourceType) => {
  let firstIndex = Math.round(Math.random() * 10) + 1;
  let secondIndex = Math.round(Math.random() * 10) + 1;

  if (firstIndex === secondIndex) secondIndex += 1;

  const firstResourcePromise = api.fetchResource(resourceType, firstIndex);
  const secondResourcePromise = api.fetchResource(resourceType, secondIndex);
  const [firstResource, secondResource] = await Promise.all([
    firstResourcePromise,
    secondResourcePromise
  ]);
  return [firstResource, secondResource];
};

export const setWinnerAndCounter = (
  resources: Array<Resource>,
  setCounter: Dispatch<SetStateAction<number[]>>
): Array<Resource> => {
  let firstResource = resources[0];
  let secondResource = resources[1];
  if (isNotFound(firstResource) || isNotFound(secondResource)) {
    return resources;
  }

  if (isPeopleResource(firstResource) && isPeopleResource(secondResource)) {
    firstResource.winner =
      parseInt(firstResource.mass) > parseInt(secondResource.mass);
    secondResource.winner =
      parseInt(secondResource.mass) > parseInt(firstResource.mass);
  }

  if (isStarshipResource(firstResource) && isStarshipResource(secondResource)) {
    firstResource.winner =
      parseInt(firstResource.crew) > parseInt(secondResource.crew);
    secondResource.winner =
      parseInt(secondResource.crew) > parseInt(firstResource.crew);
  }

  if (firstResource.winner) {
    setCounter(prevCounter => [prevCounter[0] + 1, prevCounter[1]]);
  }

  if (secondResource.winner) {
    setCounter(prevCounter => [prevCounter[0], prevCounter[1] + 1]);
  }

  return [firstResource, secondResource];
};
