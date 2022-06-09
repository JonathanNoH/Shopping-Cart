import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import Shop from "../Components/Shop";

describe('Shop Component', () => {
  it("renders shop", () => {
    const { container } = render(<Shop />);
    expect(container).toMatchSnapshot();
  })
});