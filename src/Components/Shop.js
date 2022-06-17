import React from "react";
import Item from "./Item";
import Cart from "./Cart";
import { useOutletContext } from "react-router-dom";
import '../styles/Shop.css';

const Shop = () => {
  const [cart, setCart] = useOutletContext();

  const addItemToCart = (item, currentAmount, amountToAdd) => {
    const parsedCurrentAmount = parseInt(currentAmount);
    const parsedAmountToAdd = parseInt(amountToAdd);
    setCart(prevState => {
      return { ...prevState, [item]: (parsedCurrentAmount + parsedAmountToAdd)}
    })
  }

  const removeItem = (item) => {
    let newCart = {...cart};
    delete newCart[item];
    setCart(newCart);
  }

  return (
    <div className="Shop">
      <Cart cart={cart} handleRemoveItem={removeItem}/>
      <div className="container">
        <h1>Shop</h1>
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
    </div>
  )
}

export default Shop;