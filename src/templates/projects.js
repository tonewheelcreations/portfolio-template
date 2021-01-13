import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Projects = ({ data }) => {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <Img fluid={featuredImgFluid} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        featuredImage {
            childImageSharp {
            fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }
`

// export const query = graphql`
// query (
//     $slug: String!
//   ) {
//     markdownRemark (
//       fields: {
//         slug: {
//           eq: $slug
//         }
//       }
//     ) {
//       frontmatter {
//         title
//         date
//         featuredImage {
//             childImageSharp {
//               fluid(maxWidth: 800) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//       }
//       html
//     }
//   }
//   `

// const Projects = (props) => {
//   let featuredImgFluid = props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid
//   return (
//     <Layout>
//       <h1>{props.data.markdownRemark.frontmatter.title}</h1>
//       <p>{props.data.markdownRemark.frontmatter.date}</p>
//       <Img fluid={featuredImgFluid} />
//       <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
//     </Layout>
//   )
// }

export default Projects