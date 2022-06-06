import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const itemList = useSelector((state) => state.cart.itemList);
  console.log("here i am ");
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          {itemList.map((element, index) => {
            return (
              <CartItem
                id={element.id}
                quantity={element.quantity}
                key={index}
                price={element.price}
                name={element.name}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
