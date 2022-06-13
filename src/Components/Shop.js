import React, { useState } from "react";
import Item from "./Item";

const Shop = () => {
  const [cart, setCart] = useState({});

  const addItemToCart = (item, currentAmount) => {
    setCart(prevState => {
      return { ...prevState, [item]: (currentAmount + 1)}
    })
  }

  return (
    <div>
      <h1>Shop</h1>
      <Item 
        title="Apple" 
        description="fruit" 
        amount={('Apple' in cart) ? cart.Apple : 0 }
        onAdd={addItemToCart}
      />
    </div>
  )
}

export default Shop;