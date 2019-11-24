import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Counter from ".";
import { AppProvider, AppConsumer } from "../../contexts/appContext";

describe("Counter", () => {
  it("should render correctly", () => {
    render(<Counter />);
  });

  it("should render default counter value", () => {
    const { getByRole } = render(
      <AppProvider>
        <Counter />
      </AppProvider>
    );

    const counter = getByRole("heading");

    expect(counter).toHaveTextContent("0 : 0");
  });

  it("should rerender correctly on counter change", async () => {
    const { getByRole } = render(
      <AppProvider>
        <AppConsumer>
          {({ setCounter }) => (
            <button onClick={() => setCounter([1, 1])}></button>
          )}
        </AppConsumer>
        <Counter />
      </AppProvider>
    );

    expect(getByRole("heading")).toHaveTextContent("0 : 0");

    fireEvent.click(getByRole("button"));

    const counter = await waitForElement(() => getByRole("heading"));

    expect(counter).toHaveTextContent("1 : 1");
  });
});
