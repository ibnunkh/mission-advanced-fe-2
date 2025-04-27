import Header from "../components/organisems/Header";
// import Heading from "../components/molecules/Heading";
// import styles from "../styles/Login.module.css"

export default function AuthLayouts(props) {
    const {children} = props;
    return (
        <>
            <header>
                <Header />
            </header>
            
            <main>
                {children}
            </main>
        </>
    )
}