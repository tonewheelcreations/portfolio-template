
import React from "react"
import styles from "./styles/footer.module.scss"

const Footer = () => (
  <footer>
    <p className={styles.p}>Designed and built by Leo Sherman © {new Date().getFullYear()}</p>
  </footer>
)

export default Footer