import React from 'react'
import Nav from './Nav'
import { Link } from 'gatsby'
import layoutStyles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={layoutStyles.bodyContainer}>
        {children}
      </div>
    </>
  )
}
