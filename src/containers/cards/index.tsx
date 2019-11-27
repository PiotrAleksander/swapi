import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import ResourceCard from "../../components/resourceCard";
import AppContext from "../../contexts/appContext";
import { Resource } from "../../types/Resource";

export default () => {
  const { resources, isSending } = useContext(AppContext);

  return isSending ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {resources &&
            resources.map((resource: Resource, index) => (
              <Grid key={index} item>
                <ResourceCard {...resource} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
