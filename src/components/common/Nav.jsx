import React from 'react'
import { Link } from 'gatsby'
import navStyles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <Link className={navStyles.navLink} to="/">HOME</Link>
        <Link className={navStyles.navLink} to="/about/">LOCATIONS</Link>
        <Link className={navStyles.navLink} to="/contact/">MENU</Link>
        <Link className={navStyles.navLink} to="/contact/">ORDER</Link>
      </ul>
    </nav>
  )
}
