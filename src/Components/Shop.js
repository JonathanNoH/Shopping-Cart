import React from "react";
import Item from "./Item";
import Cart from "./Cart";
import { useOutletContext } from "react-router-dom";

import '../styles/Shop.css';

import blueberryJam from '../imgs/blueberry-jam-pexels-karolina-grabowska.jpg';
import marmalade from '../imgs/marmalade-pexels-geraud-pfeiffer.jpg';
import strawberryJam from '../imgs/strawberry-jam-pexels-markus-spiske.jpg';
import raspberryJam from '../imgs/raspberry-jam-pexels-cottonbro.jpg';
import burgerPatties from '../imgs/burger-patties-pexels-jonathan-borba.jpg';

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
          title="Frozen Burger Patties"
          description="Our classic burger patties frozen and sent right to you. Packs of 4."
          amount={('Frozen Burger Patties' in cart) ? cart['Frozen Burger Patties'] : 0 }
          onAdd={addItemToCart}
          img={burgerPatties}
          imgAlt='Burger Patties'
        />
        <Item
          title="Marmalade"
          description="Fresh Marmalade using secret recipe."
          amount={('Marmalade' in cart) ? cart.Marmalade : 0}
          onAdd={addItemToCart}
          img={marmalade}
          imgAlt='Marmalade'
        />
        <Item
          title="Blueberry Jelly"
          description="Delectable blueberries picked locally."
          amount={('Blueberry Jelly' in cart) ? cart['Blueberry Jelly'] : 0}
          onAdd={addItemToCart}
          img={blueberryJam}
          imgAlt='Blueberry Jelly'
        />
        <Item
          title="Strawberry Jelly"
          description="Only the ripest of strawberries, pureed to perfection."
          amount={('Strawberry Jelly' in cart) ? cart['Strawberry Jelly'] : 0}
          onAdd={addItemToCart}
          img={strawberryJam}
          imgAlt='Strawberry Jelly'
        />
        <Item
          title="Raspberry Jelly"
          description="Pretty much normal raspberry jelly."
          amount={('Raspberry Jelly' in cart) ? cart['Raspberry Jelly'] : 0}
          onAdd={addItemToCart}
          img={raspberryJam}
          imgAlt='Raspberry Jelly'
        />
      </div>
    </div>
  )
}

export default Shop;