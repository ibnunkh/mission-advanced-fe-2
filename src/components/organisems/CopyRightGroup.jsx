import React from 'react'
import CopyRightFooter from '../atoms/CopyRightFooter'
import SocialMedia from '../molecules/SocialMedia'
import styles from "../../styles/Home.module.css"

export default function CopyRightGroup() {
    return (
        <>
            <div className={styles.copyrightGroup}>
                <CopyRightFooter />
                <SocialMedia />
            </div>
        </>
    )
}