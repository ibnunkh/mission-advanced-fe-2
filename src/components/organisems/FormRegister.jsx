import FormField from "../molecules/FormField"
import Button from "../atoms/Button"
import OtherAction from "../atoms/OtherAction"
import Divider from "../atoms/Divider"
import FormButton from "../molecules/FormButton"
import NumberPhone from "../molecules/NumberPhone"
import Heading from "../molecules/Heading"
import styles from "../../styles/Register.module.css"
import styles2 from "../../styles/Login.module.css"
import {useState} from "react"
import { useDispatch } from 'react-redux'
import { registerUser, resetRegisterStatus } from '../../features/auth/authSlice'
import { useNavigate } from "react-router-dom"

export default function FormRegister() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ name: '', email: '',  phone: '', password: '', confirmPassword: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(registerUser(formData)).unwrap();
            navigate('/login');
            dispatch(resetRegisterStatus());
        } catch (error) {
            console.error('Registration error', error);
        }
    };

    const handleLoginClick = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <>
            <div className={styles.registerContainer}>
                <div className={styles.heading}>
                    <Heading title="Pendaftaran Akun" description="Yuk, Daftarkan akunmu sekarang juga!" />
                </div>
                <form action="" className={styles.form} onSubmit={handleSubmit}>
                    <fieldset className={styles.formGroup}>
                        <FormField label="Nama Lengkap" type="text" value={formData.name} onChange={handleChange} placeholder="Nadin Amizah" name="name" />
                        <FormField label="E-Mail" type="email" value={formData.email} onChange={handleChange} placeholder="babymonster@yg.co.id" name="email" />
                        <NumberPhone value={formData.phone} onChange={handleChange} />
                        <FormField label="Kata Sandi" type="password" value={formData.password} onChange={handleChange} placeholder="********" name="password" />
                        <FormField label="Konfirmasi Kata Sandi" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="********" name="confirmPassword" />
                    </fieldset>
                    <OtherAction />
                    <div className={styles.formButton}>
                        <Button className={styles.btnDaftar} type="submit" children="Daftar" />
                        <Button className={styles.btnMasuk} onClick={handleLoginClick}  children="Masuk" />
                    </div>
                    <div className={styles.divider}>
                        <Divider />
                    </div>
                    <div className={styles2.formButton}>
                        <FormButton children="Daftar dengan Google" />
                    </div>
                </form>
            </div>
        </>
    )
}