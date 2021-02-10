import React from "react"
import styles from "./styles/columns.module.scss"

export default ({ children }) => (
    <div className={styles.container}>
        {children}
    </div>
)