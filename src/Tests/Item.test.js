import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import Item from "../Components/Item";

describe('component props', () => {
  it('uses given title', () => {
    render(<Item title={"orange"}/>);
    expect(screen.getByRole('heading').textContent).toMatch("orange");
  })
})