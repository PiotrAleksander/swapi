import React from "react";
import {
  render,
  waitForElement,
  fireEvent,
  waitForElementToBeRemoved
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dropdown from ".";
import { ResourceType } from "../../types/enums/ResourceTypeEnum";
import { AppProvider } from "../../contexts/appContext";

describe("Dropdown", () => {
  it("should render default resourceType", () => {
    const { getByText } = render(<Dropdown />);
    expect(getByText(ResourceType[ResourceType.PEOPLE])).toBeDefined();
  });

  it("should render STARSHIPS if the resourceType changes", async () => {
    const { queryByText, getByRole, getAllByRole, getByText } = render(
      <AppProvider>
        <Dropdown />
      </AppProvider>
    );

    expect(
      queryByText(ResourceType[ResourceType.STARSHIPS])
    ).not.toBeInTheDocument();

    fireEvent.click(getByRole("button"));
    await waitForElement(() => getByText(ResourceType[ResourceType.STARSHIPS]));

    fireEvent.click(getByText(ResourceType[ResourceType.STARSHIPS]));
    await waitForElementToBeRemoved(() =>
      getAllByRole("option", { hidden: true })
    );

    expect(getByText(ResourceType[ResourceType.STARSHIPS])).toBeDefined();
  });
});
