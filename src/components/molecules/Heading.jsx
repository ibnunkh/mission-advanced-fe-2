import styles from '../../styles/Register.module.css'
export default function Heading(props) {
    const {title, description} = props;
    return (
        <>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </>
    )
}