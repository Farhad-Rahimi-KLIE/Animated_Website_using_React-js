import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10-mx-auto">
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
  <a className="navbar-brand" href="/">{props.title}</a>
  
  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <Link className="nav-link" to="/">{props.home}</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/About">{props.about}</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/services">{props.services}</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/contact">{props.contact}</Link>
    </li>
  </ul>
</nav>
    </div>
    </div>
        </div>
    </div>
  )
}

export default Navbar
