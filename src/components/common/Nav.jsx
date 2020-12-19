import React from 'react'
import { Link } from 'gatsby'
import navStyles from './Nav.module.css';
import Logo from './Logo'

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <Link className={navStyles.navLink} to="/">HOME</Link>
        <Link className={navStyles.navLink} to="/locations/">LOCATIONS</Link>
        <Logo className={navStyles.navLink} />
        <Link className={navStyles.navLink} to="/menu/">MENU</Link>
        <Link className={navStyles.navLink} to="/order/">ORDER</Link>
      </ul>
    </nav>
  )
}
