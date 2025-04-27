import Header from '../components/organisems/Header';
import Footer from '../components/organisems/Footer';
import styles from '../styles/Profile.module.css';

const ProfileLayouts = (props) => {
    const {children} = props;
    
    return (
        <>
            <header>
                <Header />
            </header>

            <main className={styles.containerProfilePage}>
                {children}
            </main>
            
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default ProfileLayouts;