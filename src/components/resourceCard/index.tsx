import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import {
  IPeopleResource,
  IStarshipResource,
  Resource
} from "../../types/interfaces/IResource";
import { Typography } from "@material-ui/core";
import { isPeopleResource, isNotFound } from "../../types/typeguards";

import "./index.css";

const ResourceCard: React.FC<Resource> = resource => (
  <Card raised={(resource as IPeopleResource | IStarshipResource).winner}>
    <CardContent>
      {isNotFound(resource) ? (
        <Typography component="h1">{resource.detail}</Typography>
      ) : (
        <>
          <Typography component="h1">{resource.name}</Typography>
          <Typography component="h2">
            {isPeopleResource(resource) ? resource.mass : resource.crew}
          </Typography>
        </>
      )}
    </CardContent>
  </Card>
);

export default ResourceCard;
