import React from 'react'
import Title from './Title'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const cartItems = useSelector(store => store.cart.items)
  console.log("cartItems >>>", cartItems)
  return (
    <nav className='header'>
      <NavLink to="/"><Title /></NavLink>
      <div className='nav-items'>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact/10">Contact</NavLink>
          <NavLink to="/cart">Cart- {cartItems.length} items</NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Header
