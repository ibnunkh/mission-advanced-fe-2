import styles from '../../styles/Login.module.css'
export default function Label(props) {
    const {htmlFor, children} = props;
    return (
        <>
            <label htmlFor={htmlFor} className={styles.formLabel}>{children}<span>*</span></label>
        </>
    )
}