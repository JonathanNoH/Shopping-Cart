import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import Item from "../Components/Item";

describe('component props', () => {
  it('uses given title and description', () => {
    render(<Item title={"orange"} description={"fruit"} />);
    expect(screen.getByRole('heading').textContent).toMatch("orange");
    expect(screen.getByText(/fruit/)).toBeInTheDocument();
  })
  it('when missing title and description uses defaults', () => {
    render(<Item></Item>);
    expect(screen.getByRole('heading').textContent).toMatch("Missing Title");
    expect(screen.getByText(/Missing Description/)).toBeInTheDocument();
  })
  it('displays amount already in cart', () => {
    render(<Item title={"orange"} description={"fruit"} amount={"4"} />);
    expect(screen.getByText(/4/)).toBeInTheDocument();
  })
})

describe('component functions', () => {
  it('fires function when add to cart button pressed', () => {
    const onAddMock = jest.fn();
    render(<Item title={"orange"} description={"fruit"} onAdd={onAddMock} />);
    const button = screen.getByRole("button", { name: "Add orange To Cart" });

    userEvent.click(button);

    expect(onAddMock).toHaveBeenCalled();
  })
})