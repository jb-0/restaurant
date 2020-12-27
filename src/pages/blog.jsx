import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/common/Layout'
import BlogCard from '../components/blog/BlogCard'

const RecipePage = ({ data }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      <p>A place for recipes, information and whatever else! See below for a list of blogs.</p>
      {data.allContentfulBlog.nodes.map(node => {
        return <BlogCard blog={node}/>
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBlog(sort: { fields: [createdAt], order: DESC }) {
      nodes {
        author
        createdAt(formatString: "HH:mm:ss DD MMMM YYYY")
        slug
        title
      }
    }
  }
`

export default RecipePage
