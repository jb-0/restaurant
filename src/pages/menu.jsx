import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/common/Layout'
import Section from '../components/common/Section'

const MenuPage = ({ data }) => {
  return (
    <Layout>
      {data.allContentfulSection.nodes.map((node, idx) => {
        return (
          <Section
            key={node.section}
            node={node}
            lastEntry={
              data.allContentfulSection.nodes.length - 1 === idx ? true : false
            }
          />
        )
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
          items
        }
      }
    }
  }
`

export default MenuPage
