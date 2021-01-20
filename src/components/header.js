import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./styles/header.module.scss"
import Contact from "./contact.js"

const NavLink = (props) => {
  return (
    <li>
      <Link activeClassName={styles.selected} to={props.to}>{props.children}</Link>
    </li>
  )
}

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.headerDiv}>
      <h3>
        <Link to="/">
          {siteTitle}
        </Link>
      </h3>
      <nav>
        <ul>
          <NavLink to="/">Portfolio</NavLink>
          <NavLink to="/about/">About</NavLink>
          <Contact />
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
