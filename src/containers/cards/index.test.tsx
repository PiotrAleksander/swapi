import React from "react";
import CardsContainer from ".";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { AppProvider, AppConsumer } from "../../contexts/appContext";
import { thirdStarship, fourthStarship } from "../../../mocks";

describe("CardsContainer", () => {
  let mockedFetch: jest.Mock;
  beforeEach(() => {
    mockedFetch = jest.fn();
    mockedFetch
      .mockResolvedValueOnce({
        json: async () => thirdStarship
      })
      .mockResolvedValueOnce({
        json: async () => fourthStarship
      });
    window.fetch = mockedFetch;
  });

  it("should render correctly", () => {
    const { container } = render(<CardsContainer />);
    expect(container).toMatchSnapshot();
  });

  it("should render if resources change", async () => {
    const { getByRole, getByText } = render(
      <AppProvider>
        <AppConsumer>
          {({ onShuffle }) => <button onClick={onShuffle}></button>}
        </AppConsumer>
        <CardsContainer />
      </AppProvider>
    );

    fireEvent.click(getByRole("button"));

    const firstHeading = await waitForElement(() =>
      getByText("TIE Advanced x1")
    );
    const secondHeading = await waitForElement(() => getByText("Executor"));

    expect(firstHeading).toBeInTheDocument();
    expect(secondHeading).toBeInTheDocument();
  });
});
