import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/Users/sherron/CodingHomework/recify-api/client/src/RecifyLogo.png'
import './NavBar.css'

const Navbar = () => {
  return (
    <nav data-testid="navbar-1" className="navbar">
      <div className="nav-center">
      <Link to="/">
        <img src={logo} alt="recify db logo"
        className="logo"></img>
      </Link>
        <ul className="nav-links">
      <li>
        <Link to= "/">
          Home
        </Link>
      </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
