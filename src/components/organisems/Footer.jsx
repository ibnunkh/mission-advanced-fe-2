import React from 'react'
import FooterContent from './FooterContent'
import CopyRightGroup from './CopyRightGroup'
import styles from "../../styles/Home.module.css"

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <FooterContent />
            <CopyRightGroup />
        </div>
    )
}