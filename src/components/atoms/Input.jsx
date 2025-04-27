import styles from '../../styles/Login.module.css'
export default function Input(props) {
    const {type, value, onChange, placeholder, name, id} = props;
    return (
        <>
            <input type={type} value={value} onChange={onChange} id={id} name={name} placeholder={placeholder} className={styles.formInput} required/>
        </>
    )
}