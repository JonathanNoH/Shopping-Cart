import React from "react";
import Item from "./Item";
import Cart from "./Cart";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const [cart, setCart] = useOutletContext();

  const addItemToCart = (item, currentAmount, amountToAdd) => {
    const parsedCurrentAmount = parseInt(currentAmount);
    const parsedAmountToAdd = parseInt(amountToAdd);
    setCart(prevState => {
      return { ...prevState, [item]: (parsedCurrentAmount + parsedAmountToAdd)}
    })
  }

  return (
    <div>
      <h1>Shop</h1>
      <div>
        <Cart cart={cart}/>
      </div>
      <Item 
        title="Apple" 
        description="fruit" 
        amount={('Apple' in cart) ? cart.Apple : 0 }
        onAdd={addItemToCart}
      />
      <Item 
        title="Orange"
        description="fruit"
        amount={('Orange' in cart) ? cart.Orange : 0}
        onAdd={addItemToCart}
      />
    </div>
  )
}

export default Shop;