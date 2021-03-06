import React, { useState } from "react";
import '../styles/Item.css';

const Item = ({title, description, amount, onAdd, img, imgAlt}) => {
  const [amountToAdd, setAmountToAdd] = useState(1);
  const handleChange = (e) => {
    //guard against copy pasting non numbers and another shenanigans
    if (e.target.validity.valid) {
      setAmountToAdd(e.target.value);
    } else {
      setAmountToAdd(0);
    }
  }

  const clickHandler = (e) => {
    e.preventDefault();
    onAdd(title, amount, amountToAdd);
  }
  return (
    <div className="Item">
      <h3>{title || "Missing Title"}</h3>
      <img src={img} alt={imgAlt || 'missing alt'} />
      <div>{description || "Missing Description"}</div>
      <form>
        <label htmlFor={`amount-to-add-${title}`}>{title} to add: </label>
        <input
          type="number"
          min={0}
          max={99}
          name={`amount-to-add-${title}`}
          id={`amount-to-add-${title}`}
          value={amountToAdd}
          onInput={handleChange}
        />
        <button type="submit" onClick={clickHandler} aria-label={`Add ${title} To Cart`}>Add To Cart</button>
      </form>
      <div><span data-testid={`${title}-test-amount`}>{amount}</span> in cart</div>
    </div>
  )
}

export default Item;