import React from 'react'
import styles from "../../styles/Home.module.css"

export default function About2Community() {
    return (
        <>
            <div className={styles.community}>
                <p className={styles.aboutTitle}>Komunitas</p>
                <div className={styles.aboutList}>
                    <p className={styles.list}>Tips Sukses</p>
                    <p className={styles.list}>Blog</p>
                </div>
            </div>
        </>
    )
}