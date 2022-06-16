import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import Shop from "../Components/Shop";
import RouteSwitch from "../RouteSwitch";

// This used to work without rendering everything but I could not figure out how to mock or fix useOutletContext() calls inside Shop when not rendering the Routing


describe('Shop Component', () => {
  it("renders shop", () => {
    
    const { container } = render(<RouteSwitch />);
    const shopButton = screen.getByRole('link', { name: "Shop"});
    userEvent.click(shopButton);
    expect(container).toMatchSnapshot();
  })
});

describe('Shop Logic', () => {
  it("adds item to cart", () => {
    render(<RouteSwitch />);
    const shopButton = screen.getByRole('link', { name: "Shop"});
    userEvent.click(shopButton);

    const button = screen.getByRole('button', { name: "Add Apple To Cart" });
    const amount = screen.getByTestId('Apple-test-amount');
    const amountToAdd = screen.getByRole('spinbutton', { name: "Apples to add:"});
    expect(amount.textContent).toBe("0");

    userEvent.click(button);

    expect(amount.textContent).toBe((0 + parseInt(amountToAdd.value)).toString());
  })
  it("adds multiple items to cart", () => {
    render(<RouteSwitch />);
    const shopButton = screen.getByRole('link', { name: "Shop"});
    userEvent.click(shopButton);
    const button = screen.getByRole('button', { name: "Add Apple To Cart" });
    const amount = screen.getByTestId('Apple-test-amount');
    const amountToAdd = screen.getByRole('spinbutton', { name: "Apples to add:"});
    expect(amount.textContent).toBe("0");

    userEvent.type(amountToAdd, "{backspace}12");
    expect(amountToAdd.value).toBe("12");

    userEvent.click(button);

    expect(amount.textContent).toBe("12");
  })
  it('removes items from cart', () => {
    render(<RouteSwitch />);
    const shopButton = screen.getByRole('link', { name: "Shop"});
    userEvent.click(shopButton);

    const button = screen.getByRole('button', { name: "Add Apple To Cart" });
    const amount = screen.getByTestId('Apple-test-amount');
    const amountToAdd = screen.getByRole('spinbutton', { name: "Apples to add:"});

    expect(amount.textContent).toBe("0");
    userEvent.click(button);
    expect(amount.textContent).toBe((0 + parseInt(amountToAdd.value)).toString());

    const cartButton = screen.getByRole('button', { name: 'Cart'});
    userEvent.click(cartButton);
    const removeButton = screen.getByRole('button', { name: "Remove Apple from cart" })

    userEvent.click(removeButton);
    expect(amount.textContent).toBe("0");
  })
})