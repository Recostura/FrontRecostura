import { useEffect, useState } from 'react';
import Style from '../pages/css/HeaderLogada.module.css'
import logoHome from '../imagens/logoHome.svg';
import user from '../imagens/user.png'
import { Link } from "react-router-dom";

function Header (){

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0){
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

    return(
        <header className={`${Style.header} ${scrolled ? Style.scrolled : ""}`}>
            <img src={logoHome} className={Style.logoHome} />
            <div className={Style.nomeHome}>Recostura</div>

            <span className={Style.caixasheader2}></span>
            <span className={Style.caixasheader3}></span>
            <span className={Style.caixasheader4}></span>
            <Link to='#'><button className={Style.btPerfil}></button></Link>
        </header>


    )
}

export default Header;