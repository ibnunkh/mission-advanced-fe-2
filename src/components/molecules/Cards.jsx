import React from 'react'
import TitleCards from './TitleCards'
import RatingAndPrice from '../organisems/RatingAndPrice'
import styles from "../../styles/Home.module.css"

export default function CardsNew({src, alt, avatar}) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardWrapper}>
                    <div className={styles.cardImage}>
                        <img className={styles.imgCard} src={src} alt={alt}/>
                    </div>
                    <TitleCards />
                    <div className={styles.mentorCard}>
                        <img className={styles.Avatar} src={avatar} />
                        <p>
                            <span className={styles.titleMentorName}>Jenna Ortega</span>
                            <span className={styles.titleMentorExperience}>Senior Accountant di <span style={{fontWeight: "bold"}}>Gojek</span></span>
                        </p>
                    </div>
                    <RatingAndPrice />
                </div>
            </div>
        </>
    )
}