import React from 'react'
import Logo from '../../assets/images/Logo-videobelajar.svg'
import styles from "../../styles/Home.module.css"

export default function FooterAbout() {
    return (
        <>
            <div className={styles.about}>
                <div className={styles.footerLogo}>
                    <img src={Logo} />
                </div>
                <div className={styles.footerText}>
                    <div className={styles.textHead}>
                        <p>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
                    </div>
                    <div className={styles.textAddress}>
                        <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                    </div>
                    <div className={styles.textPhone}>
                        <p>+62-877-7123-1234</p>
                    </div>
                </div>
            </div>
        </>
    )
}