import React from 'react'
import FooterAbout from '../molecules/FooterAbout'
import FooterAbout2 from './FooterAbout2'
import styles from "../../styles/Home.module.css"

export default function FooterContent() {
    return (
        <>
            <div className={styles.footerContent}>
                <FooterAbout />
                <FooterAbout2 />
            </div>
        </>
    )
}