/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header.js"
import Footer from "./footer.js"
import "./styles/global.scss"
import styles from "./styles/scroll.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="pageContainer">
      <Header id="top" siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="content">
        <main className="main">{children}</main>
        <div className={styles.scrollTop}>
          <a href="#top">Top</a>
        </div>
      </div>
      <Footer />
    </div >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
