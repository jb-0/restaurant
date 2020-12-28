import React from 'react'
import footerStyles from './Footer.module.css'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { v4 as uuidv4 } from 'uuid'

export default function Footer() {
  const todaysDate = new Date()
  const yearPart = todaysDate.getFullYear()

  const data = useStaticQuery(
    graphql`
      query {
        allSitePage {
          nodes {
            path
          }
        }
      }
    `
  )

  return (
    <div className={footerStyles.footerContainer}>
      <div className={footerStyles.footerSection}>
        <p>
          Copyright © {yearPart}{' '}
          <a href="https://www.jamiebarrett.co.uk">Jamie Barrett</a>
        </p>
      </div>
      <div className={footerStyles.footerSection}>
        <ul>
          {data.allSitePage.nodes.map(node => {
            if (
              ['/dev-404-page/', '/404/', '/404.html'].indexOf(node.path) === -1
            ) {
              return (
                <Link to={node.path} key={uuidv4()} >
                  <li>{node.path}</li>
                </Link>
              )
            }
          })}
        </ul>
      </div>
    </div>
  )
}
