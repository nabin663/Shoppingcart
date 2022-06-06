import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Layout = () => {
  const itemList = useSelector((state) => state.cart.itemList);
  let totalPrice = 0;
  itemList.forEach((element) => {
    totalPrice += element.price;
  });
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <CartItems />
        <div className="total-price">
          <h3>totalPrice {totalPrice}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
