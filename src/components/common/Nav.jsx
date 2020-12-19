import React from 'react'
import { Link } from 'gatsby'
import navStyles from './Nav.module.css';

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link className={navStyles.navLink} to="/">Home</Link>
        <Link className={navStyles.navLink} to="/about/">Locations</Link>
        <Link className={navStyles.navLink} to="/contact/">Menu</Link>
        <Link className={navStyles.navLink} to="/contact/">Order</Link>
      </ul>
    </nav>
  )
}
