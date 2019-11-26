import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Counter from "../../components/counter";
import CardsContainer from "../cards";
import ShuffleButton from "../../components/shuffleButton";
import ResourceDropdown from "../../components/resourceDropdown";
import ErrorBoundary from "../errorBoundary";

import logo from "./logo.svg";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://swapi.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography component="h2">Learn SWAPI</Typography>
            </a>
          </header>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Counter />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ShuffleButton />
            </Grid>
            <Grid item xs={12}>
              <ResourceDropdown />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ErrorBoundary>
            <CardsContainer />
          </ErrorBoundary>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
