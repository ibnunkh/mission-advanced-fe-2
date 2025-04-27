import React from 'react'
import LinkedIn from '../../assets/images/linkedin-icon.svg'
import Facebook from '../../assets/images/facebook-icon.svg'
import Instagram from '../../assets/images/instagram-icon.svg'
import Twitter from '../../assets/images/twitter-icon.svg'
import styles from "../../styles/Home.module.css"

export default function SocialMedia() {
    return (
        <>
            <div className={styles.socialMedia}>
                <div className={styles.icon}>
                    <img className="linkedin" src={LinkedIn} alt="linkedin-icon"/>
                </div>
                <div className={styles.icon}>
                    <img src={Facebook} alt="facebook-icon"/>
                </div>
                <div className={styles.icon}>
                    <img src={Instagram} alt="instagram-icon"/>
                </div>
                <div className={styles.icon}>
                    <img src={Twitter} alt="twitter-icon"/>
                </div>
            </div>
        </>
    )
}