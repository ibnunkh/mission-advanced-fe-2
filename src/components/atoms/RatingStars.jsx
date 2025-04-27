import React from 'react'
import styles from "../../styles/Home.module.css"

export default function RatingStars() {
    return (
        <>
            <div className={styles.stars}>
                <span className="fa fa-star" style={{color: "#FCE91B"}}></span>
                <span className="fa fa-star" style={{color: "#FCE91B"}}></span>
                <span className="fa fa-star-half-full" style={{color: "#FCE91B"}}></span>
                <span className="fa fa-star nonCheck"></span>
                <span className="fa fa-star nonCheck"></span>
            </div> 
        </>
    )
}