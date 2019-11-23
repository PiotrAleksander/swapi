import React from "react";
import ResourceCard from ".";
import { render } from "@testing-library/react";

describe("ResourceCard", () => {
  it("renders without crashing", () => {
    render(<ResourceCard />);
  });

  it("renders resource on context change", () => {});
});
