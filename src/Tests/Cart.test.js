import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import Cart from "../Components/Cart";

describe('Cart Component', () => {
  it("renders cart", () => {
    const { container } = render(<Cart cart={{}}/>);
    expect(container).toMatchSnapshot();
  })
});

describe('Accepts props', () => {
  it("displays empty cart message", () => {
    render(<Cart cart={{}}/>)
    expect(screen.getByText(/Your cart is empty/)).toBeInTheDocument();
  })
  it("displays items when cart is not empty", () => {
    render(<Cart cart={{Apple: 12, Orange: 6}}/>);
    expect(screen.getByText(/Apple/)).toBeInTheDocument();
    expect(screen.getByText(/12/)).toBeInTheDocument();
    expect(screen.getByText(/Orange/)).toBeInTheDocument();
    expect(screen.getByText(/6/)).toBeInTheDocument();
  })
})