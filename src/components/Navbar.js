import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cartProduct = useSelector(state => state.cart);
  return (
    <>
    <div>Navbar</div>
    <div><Link to="/product">Products</Link></div>
    <div><Link to="/cart">Cart &nbsp;<span>{cartProduct.length}</span></Link></div>
    </>
  )
}

export default Navbar