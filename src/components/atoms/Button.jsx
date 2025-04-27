// import styles from '../../styles/Login.module.css'
export default function Button(props) {
    const {className, onClick, type, children} = props;
    return (
        <>
            <button type={type} className={className} onClick={onClick}>{children}</button>
        </>
    )
}