import React from 'react'
import logoStyles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={logoStyles.logoContainer}>
      <div className={logoStyles.logo}>
        <h1 className={logoStyles.logoText}>ITALIAN RESTAURANT</h1>
      </div>
    </div>
  )
}
