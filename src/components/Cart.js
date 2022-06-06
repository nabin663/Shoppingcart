import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(shawCart());
  };

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="cartIcon">
      <h3 onClick={handleCart}>Cart: {totalQuantity} Items</h3>
    </div>
  );
};

export default Cart;
