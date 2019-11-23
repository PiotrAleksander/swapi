import React from "react";
import App from ".";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  render(<App />);
});
