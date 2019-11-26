import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from ".";

describe("AppContainer", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("should render expected elements", () => {
    const { getByText } = render(<App />);

    expect(getByText("Counter")).toBeInTheDocument();
    expect(getByText("Shuffle")).toBeInTheDocument();
    expect(getByText("PEOPLE")).toBeInTheDocument();
  });
});
