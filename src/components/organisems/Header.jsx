import Logo from "../atoms/Logo"
// import logoMenu from "../../assets/images/bars-solid.svg"
import logoMenu from "../../assets/images/nav-mobile.svg";
// import avatar from "../../assets/images/Avatar-profile.svg"
import DropdownBeranda from "../../components/organisems/DropdownBeranda";
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleKategoriClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }
 
    return (
        <>
            <div className="header">
                <Logo />
                <img src={logoMenu} alt="logoMenu" className="mobileMenu" />
                <div className="menu">
                    <a href="#" onClick={handleKategoriClick} className="kategori">Kategori</a>
                    {isOpen && (
                        <div className="dropdown">
                            <button onClick={() => navigate("/login")}>Login</button>
                            <button onClick={() => navigate("/register")}>Register</button>
                        </div>
                    )}
                    <DropdownBeranda />
                </div>
            </div>
        </>
    )
}