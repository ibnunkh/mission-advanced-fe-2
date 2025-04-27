import React from 'react'
import styles from "../../styles/Home.module.css"

export default function About2Company() {
    return (
        <>
            <div className={styles.company}>
                <p className={styles.aboutTitle}>Perusahaan</p>
                <div className={styles.aboutList}>
                    <p className={styles.list}>Tentang Kami</p>
                    <p className={styles.list}>FAQ</p>
                    <p className={styles.list}>Kebijakan Privasi</p>
                    <p className={styles.list}>Ketentuan Layanan</p>
                    <p className={styles.list}>Bantuan</p>
                </div>
            </div>
        </>
    )
}