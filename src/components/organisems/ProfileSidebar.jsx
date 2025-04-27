import React from 'react';
import logoProfil from '../../assets/images/Person.svg';
import logoKelas from '../../assets/images/Book.svg';
import logoPesanan from '../../assets/images/logo-pesanan.svg';
import styles from '../../styles/Profile.module.css';


const ProfileSidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <h5>Ubah Profil</h5>
                <p>Ubah data diri Anda</p>
            </div>
            <div className={styles.cardSidebar}>
                <div className={styles.active}>
                    <img src={logoProfil} alt="logoProfil" /> Profil Saya</div>
                <div className={styles.disabled}>
                    <img src={logoKelas} alt="logoKelas" /> Kelas Saya</div>
                <div className={styles.disabled}>
                    <img src={logoPesanan} alt="logoPesanan" /> Pesanan Saya</div>
            </div>
        </div>
    );
};

export default ProfileSidebar;