import React from "react"
import styles from "./styles/text.module.scss"

export default ({ children }) => (
    <div className={styles.container}>
        <div className={styles.items}>{children}</div>
    </div>
)