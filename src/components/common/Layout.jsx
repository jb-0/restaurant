import React from 'react'
import Nav from './Nav'
import { Link } from 'gatsby'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        {children}
      </div>
    </>
  )
}
