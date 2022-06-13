import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import Shop from "../Components/Shop";
/*
jest.mock("./Item", () => ({title, description, amount, onAdd}) => {
  const clickHandler = () => onAdd(title, amount);
  <div>
    <h3>{title || "Missing Title"}</h3>
    <div role={title + "-description"}>{description || "Missing Description"}</div>
    <button onClick={clickHandler} aria-label={`Add ${title} To Cart`}>Add To Cart</button>
    <div role={title + "-in-cart"}>{amount}</div>
  </div>
});
*/

describe('Shop Component', () => {
  it("renders shop", () => {
    const { container } = render(<Shop />);
    expect(container).toMatchSnapshot();
  })
});

describe('Shop Logic', () => {
  it("adds item to cart", () => {
    render(<Shop />);
    const button = screen.getByRole('button', { name: "Add Apple To Cart" });
    const amount = screen.getByRole('Apple-in-cart');
    expect(amount.textContent).toBe("0");

    userEvent.click(button);

    expect(amount.textContent).toBe("1");
  })
})