import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartitems } from "../store/cart-slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const itemlit = useSelector((state) => state.cart.totalQuantity);
  console.log(itemlit);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addCartitems({ id, name, price }));
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
};

export default Product;
