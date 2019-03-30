import React from 'react'
import {NavLink} from 'react-router-dom'

const Header=()=>{
    return (
        <header>
        <nav className="navbar-menu">
          <NavLink to="/" activeClassName='active'>Book Store</NavLink>
          <NavLink to="/" activeClassName='active' className="active" aria-current="page">
            Home
          </NavLink>
          <NavLink to="/store" activeClassName='active'>Store</NavLink>
          <NavLink to="/orders" activeClassName='active'>My Orders</NavLink>
          <NavLink to="/cart" activeClassName='active'>Cart</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </nav>
      </header>
    )
}

export default Header