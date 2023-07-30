import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss";
import {  useSelector } from 'react-redux/es/hooks/useSelector';

export default function Navbar() {
  const ttl_item=useSelector((state)=>state.cart)
  return (
    <div className="navbar-container">
      <div>
        <h2 className='brand'>Redux Store</h2>
      </div>
      <div className="navbar-links">
        <Link to="/" className='link'>Home</Link>
        <Link to="cart" className='link'>Cart</Link>
        <h4>Cart Items:{ttl_item.length}</h4>
      </div>
    </div>
  );
}
