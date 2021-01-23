import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./styles/header.module.scss"
import Contact from "./contact.js"
import logo from "../svg/logo.svg"


const NavLink = (props) => {
  return (
    <li>
      <Link activeClassName={styles.selected} to={props.to}>{props.children}</Link>
    </li>
  )
}

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerDiv}>
      <Link className={styles.logo} to="/">
        <img width="32" height="32" src={logo} alt="logo" />
        <span>Leo Sherman</span>
      </Link>
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
