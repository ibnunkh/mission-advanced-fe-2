import Flag from '../../assets/images/Indonesia (ID).svg'
import styles from "../../styles/Register.module.css"
 
export default function Region() {
    return (
        <>
            <div className={styles.region}>
                <label htmlFor="flag" className={styles.flag}>
                    <img className={styles.indonesiaFlag} src={Flag} alt="IndonesiaFlag"/>
                </label>
                <select name="code" id="code">
                    <option value="+62">+62</option>
                </select>
            </div>
        </>
    )
}