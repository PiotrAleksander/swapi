import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Button from ".";
import { AppProvider, AppConsumer } from "../../contexts/appContext";
import {
  firstStarship,
  secondStarship,
  thirdStarship,
  fourthStarship
} from "../../../mocks";

describe("Button", () => {
  let mockedFetch: jest.Mock;
  beforeEach(() => {
    mockedFetch = jest.fn();
    mockedFetch
      .mockResolvedValueOnce({
        json: async () => firstStarship
      })
      .mockResolvedValueOnce({
        json: async () => secondStarship
      })
      .mockResolvedValueOnce({
        json: async () => thirdStarship
      })
      .mockResolvedValueOnce({
        json: async () => fourthStarship
      });
    window.fetch = mockedFetch;
  });

  it("should change resources on mocked shuffle", async () => {
    const { getByRole, getAllByRole, getByText, queryByText } = render(
      <AppProvider>
        <AppConsumer>
          {({ resources }) => (
            <div>
              {resources &&
                resources.map(resource => (
                  <h1 key={resource.name}>{resource.name}</h1>
                ))}
            </div>
          )}
        </AppConsumer>
        <Button />
      </AppProvider>
    );

    fireEvent.click(getByRole("button"));
    await waitForElement(() => getAllByRole("heading"));
    expect(getByText("X-wing")).toBeInTheDocument();
    expect(getByText("Y-wing")).toBeInTheDocument();

    fireEvent.click(getByRole("button"));
    await waitForElement(() => getAllByRole("heading"));
    expect(queryByText("X-wing")).not.toBeInTheDocument();
    expect(queryByText("Y-wing")).not.toBeInTheDocument();
    expect(getByText("TIE Advanced x1")).toBeInTheDocument();
    expect(getByText("Executor")).toBeInTheDocument();
  });
});
