import React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about/">Locations</Link>
        <Link to="/contact/">Menu</Link>
        <Link to="/contact/">Order</Link>
      </ul>
    </nav>
  )
}
