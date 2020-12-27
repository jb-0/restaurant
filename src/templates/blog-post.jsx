import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/common/layout"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function BlogPost({ data }) {
  return (
    <Layout>
      <div>
        <h1>{data.contentfulBlog.title}</h1>
        <small>Created {data.contentfulBlog.createdAt} by {data.contentfulBlog.author}</small>
        {documentToReactComponents(JSON.parse(data.contentfulBlog.detail.raw))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      author
      createdAt(formatString: "HH:mm:ss DD MMMM YYYY")
      slug
      title
      detail {
        raw
      }
    }
  }
`