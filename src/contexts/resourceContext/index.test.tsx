import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ResourceContext, ResourceProvider, ResourceConsumer } from ".";

/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
test("ResourceConsumer shows default value", () => {
  const { getByText } = render(<ResourceConsumer />);
  expect(getByText(/^My Resource Is:/)).toHaveTextContent(
    "My Resource Is: Unknown"
  );
});
