import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/styles/home.module.scss"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
// import Image from "../components/image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
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
      <div className={styles.header}>
        <h1>Hi, I'm Leo</h1>
        <h2>I'm a UX Designer with roots in jazz composition and video production.</h2>
      </div>
      {/* <article>
      <Link>
        
      </Link>
      </article> */}

      <article>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <Link to={`/portfolio/${edge.node.fields.slug}`}>
              <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

              </div>
              <div>
                <h3>{edge.node.frontmatter.title}</h3>
                <p>{edge.node.frontmatter.date}</p>
              </div>
            </Link>
          )
        })}
      </article>
    </Layout >
  )
}

export default IndexPage
