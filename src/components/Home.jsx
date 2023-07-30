import React, { useEffect, useState } from "react";
import { add } from "../store/CartSlice";
import './Home.scss'
import { useDispatch } from "react-redux";
export default function Home() {

  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {

    getProduts();
  
    return () => {
      console.log("Home Removed");
    }
  }, [])

  const getProduts = async() => {
    let resp = await fetch("https://fakestoreapi.com/products");
    let data = await resp.json();
    console.log(data);
    setProducts(data);
  }
  const addToCart = (product) => {
    dispatch(add(product));
  }

  return (
    <div className="products-container">
      {products.map((product, key) => (
        <div key={key} className="product">
          <div className="img-container">
            <img
              src={product.image}
              className="product-img"
              alt={product.title}
            ></img>
          </div>
          <div>
            <div className="title">
              <h4>{product.title}</h4>
            </div>

            <div className="price">
              <h5>{product.price} Rupees</h5>
            </div>
            <div className="btn-con">
              <button className="btn btn-purple" onClick={()=>addToCart(product)}>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
