// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/node-apis/
//  */

// // You can delete this file if you're not using it

// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql(`
// query {
//     allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//             id
//           }
//         }
//       }
// }
//     `)

//   // create pagination for posts

//   const postsPerPage = 4
//   const pages = Math.ceil(data.allMdx.edges.length / postsPerPage)

//   Array.from({ length: pages }).forEach((_, i) => {
//     actions.createPages({
//       path: i === 0 ? `/` : `/${i + 1}`,
//       component: require.resolve("./src/templates/allPosts.js"),
//       context: {
//         limit: postsPerPage,
//         skip: i * postsPerPage,
//         numPages,
//         currentPage: i + 1
//       }
//     })
//   })

//   // create single post

//   data.allMdx.edges.forEach(edge => {
//     const slug = edge.node.frontmatter.slug
//     const id = edge.node.id
//     actions.createPages({
//       path: slug,
//       component: require.resolve(`./src/templates.singlePost.js`),
//       context: { id },
//     })
//   })
// } 