import React from 'react'
import { NavLink } from 'react-router-dom'


export default function StyledNavbar() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
    </nav>
  )
}
