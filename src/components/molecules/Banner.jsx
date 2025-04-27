import React from 'react'
import styles from "../../styles/Home.module.css"

export default function Banner() {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.cta}>
                    <div className={styles.text}>
                        <span>NEWSLETTER</span>
                        <h3>Mau Belajar Lebih Banyak?</h3>
                        <p className={styles.desc}>Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
                    </div>
                    <div className={styles.buttonWrapperCta}>
                        <input id={styles.email} type="email" placeholder="Masukkan Emailmu"/>
                        <button className={styles.buttonCta} href="#">Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}