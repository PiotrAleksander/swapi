import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";

import ResourceCard from "../../components/resourceCard";
import AppContext from "../../contexts/appContext";
import {
  IPeopleResource,
  IStarshipResource
} from "../../types/interfaces/IResource";

export default () => {
  const { resources } = useContext(AppContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {!!resources &&
            resources.map((resource: IPeopleResource | IStarshipResource) => (
              <Grid key={resource.url} item>
                <ResourceCard {...resource} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
