import React from 'react'
import orderStyles from './Order.module.css'
import uberEatsImage from '../../images/UberEats_Badge_Horizontal.png'

export default function Order() {
  return (
    <div className={orderStyles.orderContainer}>
      <h1>Order</h1>
      <p>Get our food delivered fresh to your door using UberEats</p>
      <a href="https://www.ubereats.com/london/food-delivery/italianrestaurant">
        <img 
        className={orderStyles.partnerImage}
        alt="Order on Uber eats button / link"
        src={uberEatsImage} />
      </a>
    </div>
  )
}
