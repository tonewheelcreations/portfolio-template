import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./styles/header.module.scss"

const NavLink = (props) => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

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
          <NavLink to="/contact/">Contact</NavLink>
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
