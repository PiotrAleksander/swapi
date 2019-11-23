import React, { createContext } from "react";
import { IResourceContext } from "../../types/interfaces/IResourceContext";
import { ResourceType } from "../../types/enums/ResourceTypeEnum";
import { fetchResource } from "../../services/swapi";

export const ResourceContext = createContext<IResourceContext | null>(null);
