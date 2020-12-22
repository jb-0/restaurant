import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/common/Layout'
import { renderRichText } from "gatsby-source-contentful/rich-text"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {data.allContentfulHome.nodes.map(section => {
        return (
          <div key={section} className="section">
            <h1>{section.heading}</h1>
            <h2>{section.subHeading}</h2>
            <p>{renderRichText(section.detail)}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulHome {
      nodes {
        detail {
          raw
        }
        heading
        subHeading
        image {
          file {
            url
          }
        }
      }
    }
  }
`

export default IndexPage
