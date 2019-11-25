import React from "react";
import { render } from "@testing-library/react";

import ResourceCard from ".";

describe("ResourceCard", () => {
  it("renders without crashing", () => {
    render(<ResourceCard />);
  });

  it("renders resource on context change", () => {});
});
