import React, { useContext } from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AppContext, { AppProvider, AppConsumer } from ".";

test("AppContext return default value", () => {
  const { getByText } = render(<AppConsumer>{}</AppConsumer>);
  expect(getByText(/^My Name Is:/)).toHaveTextContent("My Name Is: Unknown");
});
