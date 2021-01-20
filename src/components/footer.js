
import React from "react"
import styles from "./styles/footer.module.scss"

const Footer = () => (
  <footer className={styles.footer}>
    <p>Designed and coded by Leo Sherman © {new Date().getFullYear()}</p>
  </footer>
)

export default Footer