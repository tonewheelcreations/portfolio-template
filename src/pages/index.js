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
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {          
          frontmatter {
            date(formatString: "MMM D, YYYY")
            title
            subtitle
            featuredImage {
              childImageSharp {
              fluid(maxWidth: 800) {
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
        <h2>I'm a <Link to="/about/#design">UX Designer</Link> with roots in <Link to="/about/#music">jazz composition</Link> and <Link to="/about/#video">video production</Link>.</h2>
      </div>

      <div className={styles.projects}>
        {data.allMdx.edges.map((edge) => {
          return (
            <article className={styles.article}>
              <Link to={`/portfolio/${edge.node.fields.slug}`}>
                <div>
                  <Image fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />
                </div>
                <div className={styles.projectInfo}>
                  <h3>{edge.node.frontmatter.title}</h3>
                  <p>{edge.node.frontmatter.subtitle}</p>
                  <p>{edge.node.frontmatter.date}</p>

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
