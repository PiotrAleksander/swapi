import React from "react";
import logo from "./logo.svg";
import "./index.css";
import { fetchResource } from "../../services/swapi";
import { ResourceType } from "../../types/enums/ResourceTypeEnum";
import { IResourceContext } from "../../types/interfaces/IResourceContext";

const initialResourceContext: IResourceContext = {
  resourceType: ResourceType.PEOPLE,
  resources: [],
  counter: [0, 0],
  onShuffle: fetchResource
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
