import React, { useState } from 'react'
import "../styles/Header.css"
import { Link } from 'react-router-dom';
import Logo from "../images/Frame2.png";
import { IoIosPerson } from "react-icons/io"
import { BsSearch } from "react-icons/bs"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { FaBars, FaTimes } from "react-icons/fa"
// import {  } from "react-icons/fa"

function Header() {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <div>

      <div className='header'>
        <Link to="/"><img src={Logo} alt="logo" className='logo' /></Link>

        <div className='container-item'>
          <ul className={isMobile ? "nav-links-mobile" : "items"}
            onClick={() => setIsMobile(false)}>

            <li><Link to="/" className='link-active'>home</Link></li>
            <li><Link to="/shop" className='link'>Shop</Link></li>
            <li><Link to="/" className='link'>Blog</Link></li>
            <li><Link to="/about" className='link'>About</Link></li>
            <li><Link to="/contact-us" className='link'>Contact</Link></li>

            <div className='registerInfo'>
              <Link to="/login">
                <button className='btnSign'>Login</button>
              </Link>
              <Link to="/sign-up">
                <button className='btnSign'>Register</button>
              </Link>
            </div>

          </ul>
        </div>

        <div className='container-items'>
          <ul className={isMobile ? "nav-links-mobile" : "items"}
            onClick={() => setIsMobile(false)}>
            <li className='links'><Link to="/Login" className='to'><IoIosPerson className='item-icon' />Login/</Link><Link to="/sign-up" className='to'>Register</Link></li>
            <li className='links'><BsSearch className='item-icon' /></li>
            <li className='links'><Link to="/Cart" className='to'><AiOutlineShoppingCart className='item-icon' /></Link>1</li>
            <li className='links'><AiOutlineHeart className='item-icon' />2</li>
          </ul>
        </div>
      </div>
      <button className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  )
}

export { Header }