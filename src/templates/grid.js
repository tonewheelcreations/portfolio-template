import React from "react"
import styles from "../components/styles/grid.module.scss"

const Grid = ({ children }) => (
    <div className={styles.grid}>
        <div className={styles.text}>{children}</div>
    </div>
)

export default Grid
