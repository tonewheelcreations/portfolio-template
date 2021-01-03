
import React from "react"
import styles from "./styles/footer.module.scss"

const Footer = () => (
<footer className={styles.footer}>
    Designed and built by Leo Sherman © {new Date().getFullYear()}
  </footer>
)

export default Footer