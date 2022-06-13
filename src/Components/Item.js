import React from "react";

const Item = ({title, description, amount, onAdd}) => {
  const clickHandler = () => onAdd(title, amount);

  return (
    <div>
      <h3>{title || "Missing Title"}</h3>
      <div role={title + "-description"}>{description || "Missing Description"}</div>
      <button onClick={clickHandler} aria-label={`Add ${title} To Cart`}>Add To Cart</button>
      <div role={title + "-in-cart"}>{amount}</div>
    </div>
  )
}

export default Item;