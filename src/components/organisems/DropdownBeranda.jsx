import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../../assets/images/Avatar-profile.svg';
import logoKeluar from '../../assets/images/Material Icon.svg';

const DropdownBeranda = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && ! dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleProfileSayaClick = (e) => {
        e.preventDefault();
        navigate('/profile');
    };

    const handleKeluarClick = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="dropdownBeranda" ref={dropdownRef}>
            <img src={avatar} alt="" onClick={() => setIsOpen(!isOpen)} className="avatar" />
            {isOpen && (
                <div className="dropdownMenu">
                    <div className="dropdownBox">
                        <a href="" onClick={handleProfileSayaClick} className="dropdownItem">Profil Saya</a>
                    </div>
                    <div className="dropdownBox">
                        <a href="" className="dropdownItem">Kelas Saya</a>
                    </div>
                    <div className="dropdownBox">
                        <a href="" className="dropdownItem">pesanan Saya</a>
                    </div>
                    <div className="dropdownBox" style={{display: "flex", gap: "1px"}} onClick={handleKeluarClick}>
                        <a href="" className="dropdownItem" style={{color: "#FF5C2B"}}>Keluar</a>
                        <img src={logoKeluar} alt="logoKeluar" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownBeranda;