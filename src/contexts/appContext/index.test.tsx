import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { AppProvider, AppConsumer } from ".";
import { ResourceType } from "../../types/enums/ResourceTypeEnum";
import { firstStarship, secondStarship } from "../../../mocks";

describe("AppContext", () => {
  let mockedFetch: jest.Mock;
  beforeEach(() => {
    mockedFetch = jest.fn();
    mockedFetch.mockResolvedValue({
      json: async () => [firstStarship]
    });
    window.fetch = mockedFetch;
  });

  afterEach(cleanup);

  it("consumer renders initial resourceType", () => {
    const { container } = render(
      <AppProvider>
        <AppConsumer>
          {({ resourceType }) => <div>{ResourceType[resourceType]}</div>}
        </AppConsumer>
      </AppProvider>
    );

    expect(container.textContent).toEqual("PEOPLE");
  });

  it("changes resources on mocked onShuffle call", async () => {
    const { getByRole } = render(
      <AppProvider>
        <AppConsumer>
          {({ resources, onShuffle }) => (
            <div>
              <h1>{resources && resources[0].name}</h1>
              <button onClick={() => onShuffle()}></button>
            </div>
          )}
        </AppConsumer>
      </AppProvider>
    );

    fireEvent.click(getByRole("button"));

    const heading = await waitForElement(() => getByRole("heading"));

    expect(heading).toHaveTextContent("Y-wing");
  });

  it("changes resourceType", async () => {
    // not testing if the new resourceType will get passed to the onShuffle function -> it's the role of useCallback from React
    const { getByRole } = render(
      <AppProvider>
        <AppConsumer>
          {({ resourceType, setResourceType }) => (
            <div>
              <h1>{ResourceType[resourceType]}</h1>
              <button
                onClick={() => setResourceType(ResourceType.STARSHIPS)}
              ></button>
            </div>
          )}
        </AppConsumer>
      </AppProvider>
    );

    expect(getByRole("heading")).toHaveTextContent("PEOPLE");

    fireEvent.click(getByRole("button"));

    const heading = await waitForElement(() => getByRole("heading"));

    expect(heading).toHaveTextContent("STARSHIPS");
  });
});
