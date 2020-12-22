import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/common/Layout'
import Section from '../components/common/Section'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {data.allContentfulHome.nodes.map(node => {
        return <Section node={node} />
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulHome {
      nodes {
        section
        heading
        subHeading
        image {
          file {
            url
          }
          description
        }
        detail {
          raw
        }
      }
    }
  }
`

export default IndexPage
