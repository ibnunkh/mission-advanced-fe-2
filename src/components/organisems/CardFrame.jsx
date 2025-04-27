import React from 'react'
import Cards from '../molecules/Cards'
import card1 from '../../assets/images/card-1.svg'
import avatar1 from '../../assets/images/Avatar-card-1.svg'
import card2 from '../../assets/images/card-2.svg'
import avatar2 from '../../assets/images/Avatar-card-2.svg'
import card3 from '../../assets/images/card-3.svg'
import avatar3 from '../../assets/images/Avatar-card-3.svg'
import card4 from '../../assets/images/card-4.svg'
import avatar4 from '../../assets/images/Avatar-card-4.svg'
import card5 from '../../assets/images/card-5.svg'
import avatar5 from '../../assets/images/Avatar-card-5.svg'
import card6 from '../../assets/images/card-6.svg'
import avatar6 from '../../assets/images/Avatar-card-6.svg'
import card7 from '../../assets/images/card-7.svg'
import avatar7 from '../../assets/images/Avatar-card-7.svg'
import card8 from '../../assets/images/card-8.svg'
import avatar8 from '../../assets/images/Avatar-card-8.svg'
import card9 from '../../assets/images/card-9.svg'
import avatar9 from '../../assets/images/Avatar-card-9.svg'
import styles from "../../styles/Home.module.css"
export default function CardFrame() {
    return (
        <>
            <div className={styles.cardFrame}>
            <Cards src={card1} avatar={avatar1} alt="card-1" />
            <Cards src={card2} avatar={avatar2} alt="card-2" />
            <Cards src={card3} avatar={avatar3} alt="card-3" />
            <Cards src={card4} avatar={avatar4} alt="card-4" />
            <Cards src={card5} avatar={avatar5} alt="card-5" />
            <Cards src={card6} avatar={avatar6} alt="card-6" />
            <Cards src={card7} avatar={avatar7} alt="card-7" />
            <Cards src={card8} avatar={avatar8} alt="card-8" />
            <Cards src={card9} avatar={avatar9} alt="card-9" />
            </div>
        </>
    )
}