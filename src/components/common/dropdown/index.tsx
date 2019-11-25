import React, { useContext } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import AppContext from "../../../contexts/appContext";
import { ResourceType } from "../../../types/enums/ResourceTypeEnum";

import "./index.css";

export default () => {
  const { resourceType, setResourceType } = useContext(AppContext);

  return (
    <FormControl>
      <InputLabel className="dropdown-menu" id="resource-dropdown-label">
        Resource Type
      </InputLabel>
      <Select
        labelId="resource-dropdown-label"
        id="resource-dropdown"
        value={resourceType}
        onChange={event => setResourceType(event.target.value as ResourceType)}
      >
        <MenuItem value={ResourceType.PEOPLE}>
          {ResourceType[ResourceType.PEOPLE]}
        </MenuItem>
        <MenuItem value={ResourceType.STARSHIPS}>
          {ResourceType[ResourceType.STARSHIPS]}
        </MenuItem>
      </Select>
    </FormControl>
  );
};
