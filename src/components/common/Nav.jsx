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
      <Link className={navStyles.navMobileLogo} to="/"><Logo /></Link>
      <div className={`${navStyles.navLinksAll} ${scrollPosition > 60 ? navStyles.navCollapse : null}`}>
        <Link className={`${navStyles.navLink} ${navStyles.navLinkLeft}`} to="/menu/">MENU</Link>
        <Link className={`${navStyles.navLink} ${navStyles.navLinkLeft}`} to="/order/">ORDER</Link>
        <Link className={navStyles.navLogo} to="/"><Logo /></Link>
        <Link className={`${navStyles.navLink} ${navStyles.navLinkRight}`} to="/locations/">LOCATIONS</Link>
        <Link className={`${navStyles.navLink} ${navStyles.navLinkRight}`} to="/blog/">BLOG</Link>
      </div>
    </nav>
  )
}
