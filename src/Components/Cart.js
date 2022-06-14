import React from "react";

const Cart = ({cart}) => {
  let cartArray;

  cartArray = Object.entries(cart).map((item) => {
    return (
    <li key={item[0].toString()}>
      <div>{item[0]}</div>
      <div>{item[1]}</div>
    </li>
    )
  })

  return (
    <div>
      {(cartArray.length > 0) ? cartArray : "Your cart is empty"}
    </div>
  )
}

export default Cart;