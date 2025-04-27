import React from 'react'
import styles from "../../styles/Home.module.css"
export default function RatingNumber() {
    return (
        <>
            <div className={styles.rating}>
                <span id="ratingText">3.5 (86)</span>
            </div> 
        </>
    )
}