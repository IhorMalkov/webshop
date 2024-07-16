import React from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimple } from "react-icons/pi";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
        <Link className="ml-[30px]" to='/'>Start Shopping</Link>
        <Link to='/about'>About</Link>
        <Link className="mr-[30px]" to='/cart'><PiShoppingCartSimple /></Link>
    </div>
  )
}

export default Header;
