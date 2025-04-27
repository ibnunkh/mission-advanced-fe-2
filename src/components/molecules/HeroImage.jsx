import React from 'react'
import styles from "../../styles/Home.module.css"

export default function HeroImage() {
    return (
        <>
            <div className={styles.heroText}>
                <h1>Revolusi Pembelajaran: Temukan ilmu Baru melalui Platform Video Interaktif!</h1>
                <p>Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
            </div>
            <button>
                <span>Temukan Video Course untuk Dipelajari!</span>
            </button>
        </>
    )
}