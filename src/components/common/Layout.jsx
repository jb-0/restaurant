import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import layoutStyles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <title>Italian Restaurant</title>
      <div className={layoutStyles.bodyContainer}>
        {children}
      </div>
      <Footer />
    </>
  )
}
