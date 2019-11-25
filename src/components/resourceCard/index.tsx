import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./index.css";
import {
  IPeopleResource,
  IStarshipResource
} from "../../types/interfaces/IResource";
import { Typography } from "@material-ui/core";

const isPeopleResource = (
  resource: IPeopleResource | IStarshipResource
): resource is IPeopleResource => {
  return (resource as IPeopleResource).mass !== undefined;
};

const ResourceCard: React.FC<
  IPeopleResource | IStarshipResource
> = resource => {
  return (
    <Card>
      <CardContent>
        <Typography component="h1">{resource.name}</Typography>
        <Typography component="h2">
          {isPeopleResource(resource) ? resource.mass : resource.crew}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
