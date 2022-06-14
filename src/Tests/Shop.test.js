import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import Shop from "../Components/Shop";

/*jest.mock("./Item", () => ({title, description, amount, onAdd}) => {
  const clickHandler = () => onAdd(title, amount);
  <div>
    <h3>{title || "Missing Title"}</h3>
    <div data-testid={'test-description'}>{description || "Missing Description"}</div>
    <button onClick={clickHandler} aria-label={`Add ${title} To Cart`}>Add To Cart</button>
    <div data-testid={'test-amount'}>{amount}</div>
  </div>
});*/


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
    const amount = screen.getByTestId('Apple-test-amount');
    const amountToAdd = screen.getByRole('spinbutton', { name: "Apples to add:"});
    expect(amount.textContent).toBe("0");

    userEvent.click(button);

    expect(amount.textContent).toBe((0 + parseInt(amountToAdd.value)).toString());
  })
  it("adds multiple items to cart", () => {
    render(<Shop />);
    const button = screen.getByRole('button', { name: "Add Apple To Cart" });
    const amount = screen.getByTestId('Apple-test-amount');
    const amountToAdd = screen.getByRole('spinbutton', { name: "Apples to add:"});
    expect(amount.textContent).toBe("0");

    userEvent.type(amountToAdd, "{backspace}12");
    expect(amountToAdd.value).toBe("12");

    userEvent.click(button);

    expect(amount.textContent).toBe("12");
  })
})