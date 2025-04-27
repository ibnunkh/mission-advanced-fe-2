import profileAvatar from '../../assets/images/avatar-profile-form.png';
import styles from '../../styles/Profile.module.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, updateProfile } from '../../features/profile/profileSlice';

const ProfileForm = () => {
    const dispatch = useDispatch();
    const { profile, loading, error } = useSelector(state => state.profile);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

    useEffect(() => {
        if (profile) {
            setFormData({
                name: profile.name || '',
                email: profile.email || '',
                phone: profile.phone || '',
                gender: profile.gender || '',
                password: '',
                confirmPassword: ''

            });
        }
    }, [profile]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            alert('Password and Confirm Password do not match.');
            return;
        }

        const updateData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            gender: formData.gender,
            ...(formData.password && { password: formData.password })
        };

        dispatch(updateProfile(updateData))
        .unwrap()
        .then(() => {
            alert('Profile updated successfully.');
        })
        .catch((error) => {
            console.error('Profile update failed', error);
        });
    };

    return (
        <div className={styles.profileForm}>
            { loading && <p>Loading...</p> }
            <div className={styles.profileHeader}>
                <img src={profileAvatar} alt="avatarProfile" />
                <div className={styles.textBox}>
                    <h5>{formData.name}</h5>
                    <p>{formData.email}</p>
                    <p id={styles.gantiFoto}>Ganti Foto Profil</p>
                </div>                
            </div>

            <div className={styles.dividerProfile}>
                <hr />
            </div>

            <form className={styles.formGrid} onSubmit={handleUpdate}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" id={styles.labelName}>Nama Lengkap</label>
                    <input 
                        type="text" 
                        className={styles.nameInput}
                        value={formData.name}
                        onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email"
                        value={formData.email}
                        onChange={handleChange} />
                </div>
                <div className={styles.formGroup} id={styles.jenisKelamin}>
                    <label htmlFor="gender">Jenis Kelamin</label>
                    <select 
                        name="gender" 
                        id="jenisKelamin"
                        value={formData.gender}
                        onChange={handleChange}>
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </div>
                <div className={styles.formGroup} id={styles.numberBox}>
                    <select name="countryCode" id="numberBoxSelect">
                        <option value="+62">+62</option>
                    </select>
                    <input 
                        type="tel"
                        name="phone"
                        id={styles.noHp}
                        value={formData.phone}
                        onChange={handleChange} />
                </div>
                <div className={styles.formGroup} id={styles.password}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange} />
                </div>
                <div className={styles.formGroup} id={styles.confirmPassword}>
                    <label htmlFor="confirmPassword">Konfirmasi Password</label>
                    <input 
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange} />
                </div>
                { error && <p>{error}</p> }
            </form>
            <div className={styles.submitSection}>
                <button type="submit" className={styles.saveBtn} onClick={handleUpdate}>Simpan</button>
            </div>
        </div>
    );
};

export default ProfileForm;