import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Counter from ".";
import { AppProvider, AppConsumer } from "../../contexts/appContext";

describe("Counter", () => {
  it("should render correctly", () => {
    const { container } = render(<Counter />);
    expect(container).toMatchSnapshot();
  });

  it("should render default counter value", () => {
    const { getAllByRole } = render(<Counter />);

    const counter = getAllByRole("heading");

    expect(counter[1]).toHaveTextContent("0 : 0");
  });

  it("should rerender correctly on counter change", async () => {
    const { getAllByRole, getByRole } = render(
      <AppProvider>
        <AppConsumer>
          {({ setCounter }) => (
            <button onClick={() => setCounter([1, 1])}></button>
          )}
        </AppConsumer>
        <Counter />
      </AppProvider>
    );

    expect(getAllByRole("heading")[1]).toHaveTextContent("0 : 0");

    fireEvent.click(getByRole("button"));

    const counter = await waitForElement(() => getAllByRole("heading")[1]);

    expect(counter).toHaveTextContent("1 : 1");
  });
});
