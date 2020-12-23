import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/common/Layout'
import Section from '../components/common/Section'

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      {data.allContentfulSection.nodes.map(node => {
        {console.log(node)}
        return <Section key={node.section} node={node} />
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulSection {
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
