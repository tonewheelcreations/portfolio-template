/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const slug = path.basename(node.fileAbsolutePath, '.mdx')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectsTemplate = path.resolve('./src/templates/projects.js')
  const response = await graphql(`
    query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)

  response.data.allMdx.edges.forEach((edge) => {
    createPage({
      component: projectsTemplate,
      path: `/portfolio/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
}
