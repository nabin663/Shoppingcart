import React from "react";
import "./Cart.css";
const CartItem = ({ id, name, quantity, price }) => {
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>x{quantity}</p>
      <article>Total ${price}</article>
      <button className="cart-actions">-</button>
      <button className="cart-actions">+</button>
    </div>
  );
};

export default CartItem;
