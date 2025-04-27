import HeroImage from '../molecules/HeroImage'
import TitleSection from '../molecules/TitleSection'
import Tabs from '../molecules/Tabs'
import CardFrame from '../organisems/CardFrame'
import Banner from '../molecules/Banner'
import styles from "../../styles/Home.module.css"
export default function MainSection() {
    return (
        <>
            <div className={styles.heroImage}>
                <HeroImage />
            </div>
            <section className={styles.cardSection}>
                <TitleSection />
                <Tabs />
                <CardFrame />
            </section>
            <div className={styles.banner}>
                <Banner />
            </div>
        </>
    )
}