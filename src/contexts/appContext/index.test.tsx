import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { AppProvider, AppConsumer } from ".";
import { ResourceType } from "../../types/enums/ResourceTypeEnum";
import { firstStarship, secondStarship } from "../../../mocks";
import { setWinnerAndCounter } from "./utils";
import { IStarshipResource } from "../../types/interfaces/IResource";

describe("AppContext", () => {
  let mockedFetch: jest.Mock;
  beforeEach(() => {
    mockedFetch = jest.fn();
    mockedFetch.mockResolvedValue({
      json: async () => firstStarship
    });
    window.fetch = mockedFetch;
  });

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
              <button onClick={onShuffle}></button>
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

  describe("setWinner", () => {
    let mockedSetCounter: jest.Mock;
    beforeEach(() => {
      mockedSetCounter = jest.fn();
    });

    it("should correctly set the winner based on resources passed", () => {
      const resources = setWinnerAndCounter(
        [firstStarship, secondStarship],
        mockedSetCounter
      );
      expect((resources[0] as IStarshipResource).winner).toBeTruthy();
      expect((resources[1] as IStarshipResource).winner).toBeFalsy();
    });

    it("should correctly set winner to false if the starships has the same crew", () => {
      const resources = setWinnerAndCounter(
        [firstStarship, firstStarship],
        mockedSetCounter
      );
      expect((resources[0] as IStarshipResource).winner).toBeFalsy();
      expect((resources[1] as IStarshipResource).winner).toBeFalsy();
    });
  });
});
