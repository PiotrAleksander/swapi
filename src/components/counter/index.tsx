import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";

import AppContext from "../../contexts/appContext";

export default () => {
  const { counter } = useContext(AppContext);
  return (
    !!counter && (
      <>
        <Typography component="h4">Counter</Typography>
        <Typography component="h5">{`${counter[0]} : ${counter[1]}`}</Typography>
      </>
    )
  );
};
