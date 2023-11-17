import "./cart.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import React, { useContext } from "react";

export const CartWindget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <>
      <div className="cart__navbar">
        <Link to="/cart">
          <box-icon name="cart"></box-icon>
        </Link>
        <span id="contador" className="item__total">
          {getTotalItems()}
        </span>
      </div>
    </>
  );
};
