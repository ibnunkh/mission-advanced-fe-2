import React from 'react'
import styles from "../../styles/Home.module.css"

export default function Tabs() {
    return (
        <>
            <div className={styles.tab}>
                <ul>
                    <li className={styles.activeNavbar}><a href="" id={styles.semuaKelas}>Semua Kelas</a></li>
                    <li><a href="">Pemasaran</a></li>
                    <li><a href="">Desain</a></li>
                    <li><a href="">Pengembangan Diri</a></li>
                    <li><a href="">Bisnis</a></li>
                </ul>
            </div>
        </>
    )
}