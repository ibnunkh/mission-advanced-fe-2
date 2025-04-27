import Region from '../molecules/Region'
import styles from "../../styles/Register.module.css"

export default function NumberPhone(props) {
    const {value, onChange} = props;
    return (
        <>
            <div className={styles.numberPhone}>
                <Region />
                <input type="tel" value={value} onChange={onChange} id="numberPhone" name="phone" className={styles.inputNumber} required/>
            </div>
        </>
    )
}