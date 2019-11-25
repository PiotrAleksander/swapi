import React from "react";
import App from ".";
import { render } from "@testing-library/react";

describe("AppContainer", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});
