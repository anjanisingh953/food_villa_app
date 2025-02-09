import React from 'react'
import Title from './Title'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='header'>
      <NavLink to="/"><Title /></NavLink>
      <div className='nav-items'>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact/10">Contact</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Header
