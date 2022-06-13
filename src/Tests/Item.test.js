import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import Item from "../Components/Item";

describe('component props', () => {
  it('uses given title and description', () => {
    render(<Item title={"orange"} description={"fruit"} />);
    expect(screen.getByRole('heading').textContent).toMatch("orange");
    expect(screen.getByRole('orange-description').textContent).toMatch("fruit");
  })
  it('when missing title and description uses defaults', () => {
    render(<Item></Item>);
    expect(screen.getByRole('heading').textContent).toMatch("Missing Title");
    expect(screen.getByRole("undefined-description").textContent).toMatch("Missing Description");
  })
  it('displays amount already in cart', () => {
    render(<Item title={"orange"} description={"fruit"} amount={"4"} />);
    expect(screen.getByRole('orange-in-cart').textContent).toMatch("4");
  })
})

describe('component functions', () => {
  it('fires function when add to cart button pressed', () => {
    const onAddMock = jest.fn();
    render(<Item title={"orange"} description={"fruit"} onAdd={onAddMock} />);
    const button = screen.getByRole("button", { name: "Add To Cart" });

    userEvent.click(button);

    expect(onAddMock).toHaveBeenCalled();
  })
})