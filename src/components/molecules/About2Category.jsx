import React from 'react'
import styles from "../../styles/Home.module.css"
export default function About2Category() {
    return (
        <>
            <div className={styles.category}>
                <p className={styles.aboutTitle}>Kategori</p>
                <div className={styles.aboutList}>
                    <p className={styles.list}>Digital & Teknologi</p>
                    <p className={styles.list}>Pemasaran</p>
                    <p className={styles.list}>Manajemen Bisnis</p>
                    <p className={styles.list}>Pengembangan Diri</p>
                    <p className={styles.list}>Desain</p>
                </div>
            </div>
        </>
    )
}