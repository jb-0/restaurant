import React from 'react'
import { Link } from 'gatsby'
import navStyles from './Nav.module.css';
import Logo from './Logo'

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <Link className={navStyles.navLink} to="/menu/">MENU</Link>
      <Link className={navStyles.navLink} to="/order/">ORDER</Link>
      <Logo />
      <Link className={navStyles.navLink} to="/locations/">LOCATIONS</Link>
      <Link className={navStyles.navLink} to="/">RECIPES</Link>
    </nav>
  )
}
