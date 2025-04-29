import React, { useState } from "react";

function Item({ name, category }) {
  // State to track whether the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Handle adding/removing from cart
  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;