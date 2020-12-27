import React from 'react'
import blogCardStyles from './BlogCard.module.css'

export default function BlogCard(props) {
  return (
    <div className={blogCardStyles.blogCard}>
      <span className={blogCardStyles.headerText}>
        <h2>{props.blog.title}</h2><br></br>
        <small>&nbsp; posted at {`${props.blog.createdAt}`}</small>
         
      </span>
    </div>
  )
}
