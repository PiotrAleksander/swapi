import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ResourceCard from ".";
import { AppProvider, AppConsumer } from "../../contexts/appContext";
import { firstStarship, secondStarship } from "../../../mocks";

describe("ResourceCard", () => {
  let mockedFetch: jest.Mock;
  beforeEach(() => {
    mockedFetch = jest.fn();
    mockedFetch
      .mockResolvedValueOnce({
        json: async () => firstStarship
      })
      .mockResolvedValueOnce({
        json: async () => secondStarship
      });
    window.fetch = mockedFetch;
  });

  it("renders resource on context change", () => {
    const { container } = render(
      <AppProvider>
        <AppConsumer>
          {({ resources }) =>
            resources &&
            resources.map(resource => (
              <ResourceCard key={resource.name} {...resource} />
            ))
          }
        </AppConsumer>
      </AppProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it("should render resource after fetched resource", async () => {
    const { getByRole, getAllByRole, getByText } = render(
      <AppProvider>
        <AppConsumer>
          {({ resources, onShuffle }) => (
            <>
              <button onClick={onShuffle} />
              {resources &&
                resources.map(resource => (
                  <ResourceCard key={resource.name} {...resource} />
                ))}
            </>
          )}
        </AppConsumer>
      </AppProvider>
    );

    fireEvent.click(getByRole("button"));
    expect(mockedFetch).toBeCalledTimes(2); // onShuffle calls fetch two times each it's call
    await waitForElement(() => getAllByRole("heading"));
    expect(getByText("Y-wing")).toBeInTheDocument();
    expect(getByText("X-wing")).toBeInTheDocument();
  });
});
