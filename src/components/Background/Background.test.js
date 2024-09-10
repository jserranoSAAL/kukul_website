import React from "react";
import { render } from "@testing-library/react";
import Background from "./Background";

describe("renders particles background", () => {
  render(<Background />);

  it("should handle useCallback", () => {
    jest.spyOn(React, "useCallback").mockImplementation((f) => f());
  });
});
