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

    //toggle to show cart
    userEvent.click(screen.getByRole('button', { name: 'Cart'}));

    expect(screen.getByText(/Your cart is empty/)).toBeInTheDocument();
  })
  it("displays items when cart is not empty", () => {
    render(<Cart cart={{Apple: 12, Orange: 6}}/>);

    //toggle to show cart
    userEvent.click(screen.getByRole('button', { name: 'Cart'}));

    expect(screen.getByText(/Apple/)).toBeInTheDocument();
    expect(screen.getByText(/12/)).toBeInTheDocument();
    expect(screen.getByText(/Orange/)).toBeInTheDocument();
    expect(screen.getByText(/6/)).toBeInTheDocument();
  })
})

it("button toggles viewing cart", () => {
  render(<Cart cart={{}}/>);
  const button = screen.getByRole('button', { name: 'Cart'});

  expect(screen.queryByText(/Your cart is empty/)).not.toBeInTheDocument();

  userEvent.click(button);
  expect(screen.getByText(/Your cart is empty/)).toBeInTheDocument();

  userEvent.click(button);
  expect(screen.queryByText(/Your cart is empty/)).not.toBeInTheDocument();
})

describe("cart total", () => {
  it("displays cart total for empty cart", () => {
    render(<Cart cart={{}} />)
    expect(screen.getByText(/0/)).toBeInTheDocument();
  })
  it("displays cart total for nonempty cart", () => {
    render(<Cart cart={{Apple: 12, Orange: 6}}/>);
    expect(screen.getByText(/18/)).toBeInTheDocument();
  })
})
