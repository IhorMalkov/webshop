import React from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimple } from "react-icons/pi";

const Header = () => {
  return (
    <>
        <Link to='/'>Start Shopping</Link>
        <Link to='/about'>About</Link>
        <Link to='/cart'><PiShoppingCartSimple /></Link>
    </>
  )
}

export default Header;
