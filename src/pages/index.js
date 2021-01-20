import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/styles/home.module.scss"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          excerpt(format: PLAIN)
          frontmatter {
            date(formatString: "MMM D, YYYY")
            title
            featuredImage {
              childImageSharp {
              fluid(maxWidth: 800, maxHeight: 440) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }  
`)

  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.topModule}>
        <h1>Hi, I'm Leo</h1>
        <h2>I'm a UX Designer with roots in jazz composition and video production.</h2>
      </div>

      <div className={styles.projects}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <article className={styles.article}>
              <Link to={`/portfolio/${edge.node.fields.slug}`}>
                <div className={styles.imageContainer}>
                  <Image fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />
                </div>
                <div>
                  <h3>{edge.node.frontmatter.title}</h3>
                  <p>{edge.node.frontmatter.date}</p>
                  <p>{edge.node.excerpt}</p>
                </div>
              </Link>
            </article>
          )
        })}
      </div>

    </Layout >
  )
}

export default IndexPage
