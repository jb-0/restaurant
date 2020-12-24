import React from 'react'
import menuStyles from './Menu.module.css'
import { v4 as uuidv4 } from 'uuid'

export default function Menu(props) {
  return (
    <div className={menuStyles.menuItemsContainer}>
      {props.items.map(item => {
        return (
          <div key={uuidv4()} className={menuStyles.menuItem}>
            <h2>
              {item.name} £{item.price}
            </h2>
            <p>{item.description}</p>
          </div>
        )
      })}
    </div>
  )
}
