import React from "react";

const Item = (props) => {

  return (
    <div>
      <h3>{props.title || "Missing Title"}</h3>
      <div>{props.description || "Missing Description"}</div>
    </div>
  )
}

export default Item;