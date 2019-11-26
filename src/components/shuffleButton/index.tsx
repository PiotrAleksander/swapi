import React, { useContext } from "react";
import Button from "@material-ui/core/Button";

import AppContext from "../../contexts/appContext";

export default () => {
  const { onShuffle } = useContext(AppContext);

  return (
    <Button variant="contained" color="primary" onClick={() => onShuffle()}>
      Shuffle
    </Button>
  );
};
