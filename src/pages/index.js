import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/common/Layout'
import Section from '../components/common/Section'
import { v4 as uuidv4 } from 'uuid'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {data.allContentfulSection.nodes.map(node => {
        return <Section key={uuidv4()} node={node} />
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulSection(
      filter: {
        childContentfulSectionSectionItemsJsonNode: {
          targetPage: { eq: "home" }
        }
      },
      sort: {fields: section, order: ASC}
    ) {
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
        childContentfulSectionSectionItemsJsonNode {
          targetPage
        }
      }
    }
  }
`

export default IndexPage
