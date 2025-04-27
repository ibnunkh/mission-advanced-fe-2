import FormField from "../molecules/FormField"
import Button from "../atoms/Button"
import OtherAction from "../atoms/OtherAction"
import Divider from "../atoms/Divider"
import FormButton from "../molecules/FormButton"
import styles from "../../styles/Login.module.css"
import Heading from "../molecules/Heading"
import {useState} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { loginUser } from '../../features/auth/authSlice';

export default function FormLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error } = useSelector(state => state.auth);
    const [formData, setFormData] = useState({ email:'', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(formData))
        .unwrap()
        .then(() => {
            navigate("/");
        })
        .catch((error) => {
            console.error("Login failed", error);
        });
    };

    const handleDirectRegister = () => {
        navigate("/register");
    };

    return (
        <>
            <div className={styles.loginContainer}>
                <div className={styles.heading}>
                    <Heading title="Masuk ke Akun" description="Yuk, lanjutin belajarmu di videobelajar." />
                </div>
                <form action="" className={styles.form} onSubmit={handleSubmit}>
                    <fieldset className={styles.formGroup}>
                        <FormField label="Email" type="email" value={formData.email} onChange={handleChange} placeholder="babymonster@yg.co.id" name="email" id="email" />
                        <FormField label="Password" type="password" value={formData.password} onChange={handleChange} placeholder="********" name="password" id="password" />
                    </fieldset>
                    <OtherAction />
                    <div className={styles.formButton}>
                        <Button className={styles.btnMasuk} type="submit" children="Masuk" />
                        { error && <p>{error}</p>}
                        <Button className={styles.btnDaftar} onClick={handleDirectRegister}  children="Daftar" />
                    </div>
                    <div className={styles.divider}>
                        <Divider />
                    </div>
                    <div className={styles.formButton}>
                        <FormButton className={styles.btnGoogle} children="Masuk dengan Google" />
                    </div>
                </form>
            </div>
        </>
    )
}