import { useEffect, useState } from 'react';
import Style from '../css/Header.module.css';
import logoHome from '../imagens/logoHome.svg';
import user from '../imagens/user.png'
import { NavLink } from "react-router-dom";
import Modal from '../pages/Modal'
import SobreNos from '../pagesCliente/SobreNos'


function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        };
    }, []);

    return (

        <header className={`${Style.header} ${scrolled ? Style.scrolled : ""}`}>
            <NavLink to="/" className={Style.logoLink}>
                <img src={logoHome} className={Style.logoHome} alt="Logo" />
            </NavLink>
            <div className={Style.nomeHome}>Recostura</div>


                    
            <NavLink to="/Parceiros" className={Style.caixasheader3}>Parceiros</NavLink>

            <a href="https://linktr.ee/recostura?utm_source=qr_code" className={Style.caixasheader4}>
                Fale conosco
            </a>

            <button onClick={openModal} className={Style.btLogin}>ACESSE SUA CONTA</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />


        </header>


    )
}

export default Header;