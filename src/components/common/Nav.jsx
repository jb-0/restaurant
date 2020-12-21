import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import navStyles from './Nav.module.css';
import Logo from './Logo'

export default function Nav() {
  const [scrollPosition, setScrollPosition] = useState();

  const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <nav className={`${navStyles.nav} ${scrollPosition > 60 ? navStyles.navCollapse : null}`}>
      <Link className={navStyles.navLink} to="/menu/">MENU</Link>
      <Link className={navStyles.navLink} to="/order/">ORDER</Link>
      <span className={navStyles.navLogo}><Logo /></span>
      <Link className={navStyles.navLink} to="/locations/">LOCATIONS</Link>
      <Link className={navStyles.navLink} to="/">RECIPES</Link>
    </nav>
  )
}
