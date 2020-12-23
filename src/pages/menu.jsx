import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/common/Layout'
import Section from '../components/common/Section'

const MenuPage = ({ data }) => {
  return (
    <Layout>
      {data.allContentfulSection.nodes.map(node => {
        return <Section key={node.section} node={node} />
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulSection(
      filter: {
        childContentfulSectionSectionItemsJsonNode: {
          targetPage: { eq: "menu" }
        }
      }
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
          items
        }
      }
    }
  }
`

export default MenuPage
