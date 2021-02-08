import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../components/styles/projects.module.scss"

const Projects = ({ data }) => {
  const post = data.mdx
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <div className={styles.container}>
        <Img className={styles.image} fluid={featuredImgFluid} />
        <div className={styles.header}>
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.subtitle}</h2>
        </div>
      </div>
      <MDXRenderer className={styles.body}>{post.body}</MDXRenderer>

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        subtitle
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

export default Projects