import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { remove } from "../store/CartSlice";
import './Cart.scss'
import { useDispatch } from "react-redux";

export default function Cart() {
  const dispath = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const removeProduct = (product) => {
    dispath(remove(product))
  }
  return (
    <div className="cart-container">
      {cartItems?.map((product, key) => (
        <div key={key} className="cart-item">
          <div className="cart-p-img">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="title">
            <h4>{product.title}</h4>
          </div>
          <div className="price">
            <h5>{product.price}</h5>
          </div>
          <div className="btn-cont">
            <button
              className="btn btn-danger"
              onClick={() => removeProduct(product)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
