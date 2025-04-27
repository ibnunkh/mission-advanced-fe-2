import Header from "../components/organisems/Header";

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