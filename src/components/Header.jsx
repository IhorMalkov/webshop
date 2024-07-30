import React from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimple } from "react-icons/pi";
import {useSelector} from "react-redux";
import {selectTotalQuantity} from "../state/cartSlice";

const Header = () => {
    const total = useSelector(selectTotalQuantity);
    console.log(total);
  return (
      <div className="flex items-center justify-between">
          <Link className="ml" to='/'>Start Shopping</Link>
          <Link to='/about'>About</Link>
          <Link className="mr-[30px]" to='/cart'><PiShoppingCartSimple/><div className="absolute text-sm text-center w-[20px] h-[20px] top-2 right-12 rounded-full bg-blue-400">
              {total}</div></Link>
      </div>
  )
}

export default Header;
