import Header from "../components/organisems/Header";
import Footer from "../components/organisems/Footer";
import styles from "../styles/Home.module.css"

export default function HomeLayouts(props) {
    const {children} = props;
    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <div className={styles.container}>
                    {children}
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}