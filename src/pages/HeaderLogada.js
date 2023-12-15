import { useEffect, useState } from 'react';
import Style from '../pages/css/HeaderLogada.module.css';
import logoHome from '../imagens/logoHome.svg';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function HeaderLogada() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${Style.header} ${scrolled ? Style.scrolled : ''}`}>
      <img src={logoHome} className={Style.logoHome} alt="Logo" />
      <div className={Style.nomeHome}>Recostura</div>

      <NavLink to="/SobreNos" className={Style.caixasheader2}>
        Sobre Nós
      </NavLink>


      <NavLink to='/Parceiros' className={Style.caixasheader3}>
        Parceiros
      </NavLink>

      <a href="https://linktr.ee/recostura?utm_source=qr_code" className={Style.caixasheader4}>
        Fale conosco
      </a>

      <div className={Style.menuContainer}>
        <button className={`${Style.btLogin} ${Style.btPerfil}`} onClick={handleMenuToggle}></button>
        {isMenuOpen && (
          <div className={Style.menu}>
            <Link to="#">Serviços</Link>
            <Link to="#">Perfil</Link>
            <Link to="#">Configurações</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderLogada; 