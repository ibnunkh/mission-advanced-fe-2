import btnGoogle from '../../assets/images/google-icon.svg'
import styles from '../../styles/Login.module.css'

export default function FormButton(props) {
    const {children} = props;
    return (
        <>
            <button type="button" className={styles.btnGoogle}>
                <img className={styles.googleIcon} src={btnGoogle} alt="google-icon" />
                <span>{children}</span>
            </button> 
        </>
    )
}