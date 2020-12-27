const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        allContentfulBlog {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }
      
      const blogTemplate = path.resolve("./src/templates/blog-post.jsx")

      result.data.allContentfulBlog.edges.forEach(edge => {
        createPage({
          path: `/blog/${edge.node.slug}/`,
          component: slash(blogTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error cannot retrieve contentful data", error)
    })
}