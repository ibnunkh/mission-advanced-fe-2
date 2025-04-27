import React from 'react'
import About2Category from '../molecules/About2Category'
import About2Company from '../molecules/About2Company'
import About2Community from '../molecules/About2Community'
import styles from "../../styles/Home.module.css"

export default function FooterAbout2() {
    return (
        <>
            <div className={styles.about2}>
                <About2Category />
                <About2Company />
                <About2Community />
            </div>
        </>
    )
}