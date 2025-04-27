import Label from '../atoms/Label'
import Input from '../atoms/Input'
import styles from "../../styles/Register.module.css"

export default function FormField(props) {
    const {label, name, type, value, onChange, placeholder, id} = props;
    return (
        <div className={styles.formField}>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} id={id} className={styles.formInput} />
        </div>
    )
}