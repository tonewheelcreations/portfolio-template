import React from "react"
import Layout from "../components/layout"
import styles from "../components/styles/home.module.scss"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.header}>
      <h1>Hi, I'm Leo</h1>
      <h2>I'm a UX Designer with roots in jazz composition and video production.</h2>
    </div>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
