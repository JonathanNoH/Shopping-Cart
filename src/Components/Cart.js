import React, { useState } from "react";

const Cart = ({cart, handleRemoveItem}) => {
  const [toggleCartDisplay, setToggleCartDisplay] = useState(false);
  const handleClick = () => {
    setToggleCartDisplay(prevState => !prevState);
  }
  
  let cartArray;
  cartArray = Object.entries(cart).map((item) => {
    return (
    <li key={item[0].toString()}>
      <div>{item[0]}</div>
      <div>{item[1]}</div>
      <button 
        onClick={() => {handleRemoveItem(item[0])}}
        aria-label={`Remove ${item[0]} from cart`}>Remove</button>
    </li>
    )
  })

  const cartTotal = Object.values(cart).reduce(
    (previous, current) => previous + current, 0
  );

  return (
    <div>
      <div>
        <button onClick={handleClick}>Cart</button>
        <span>{"("+ cartTotal +")"}</span>  
      </div>
      {toggleCartDisplay && 
      ((cartArray.length > 0) ? 
        cartArray : "Your cart is empty")
      }
    </div>
  )
}

export default Cart;