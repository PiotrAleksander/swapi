import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dropdown from ".";

describe("Dropdown", () => {
  it("should render default resourceType", () => {
    const { getByText } = render(<Dropdown />);
    expect(getByText("People")).toBeDefined();
  });
});
