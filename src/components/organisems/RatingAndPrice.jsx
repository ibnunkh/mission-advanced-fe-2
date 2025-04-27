import React from 'react'
import RatingStars from '../atoms/RatingStars'
import RatingNumber from '../atoms/RatingNumber'
import Price from '../atoms/Price'
import styles from "../../styles/Home.module.css"

export default function RatingAndPrice() {
    return (
        <>
            <div className={styles.ratingAndPrice}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <RatingStars />
                <RatingNumber />
                <Price />   
            </div>  
        </>
    )
}