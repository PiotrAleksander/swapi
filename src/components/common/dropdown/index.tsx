import React, { useContext } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import AppContext from "../../../contexts/appContext";
import { ResourceType } from "../../../types/enums/ResourceTypeEnum";

export default () => {
  const { resourceType, setResourceType } = useContext(AppContext);

  return (
    <FormControl>
      <InputLabel id="resource-dropdown-label">Age</InputLabel>
      <Select
        labelId="resource-dropdown-label"
        id="resource-dropdown"
        value={resourceType}
        onChange={event => setResourceType(event.target.value)}
      >
        <MenuItem value={ResourceType.People}>
          {ResourceType[ResourceType.PEOPLE]}
        </MenuItem>
        <MenuItem value={ResourceType.STARSHIPS}>
          {ResourceType[ResourceType.STARSHIPS]}
        </MenuItem>
      </Select>
    </FormControl>
  );
};
