import React, { useContext } from "react";
import AppContext from "../../contexts/appContext";

export default () => {
  const { counter } = useContext(AppContext);
  return !!counter && <h1>{`${counter[0]} : ${counter[1]}`}</h1>;
};
