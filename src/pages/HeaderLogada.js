import { useEffect, useState } from 'react';
import Style from '../pages/css/HeaderLogada.module.css';
import logoHome from '../imagens/logoHome.svg';
import { Link } from 'react-router-dom';

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

      <span className={Style.caixasheader2}>Sobre Nós</span>
      <span className={Style.caixasheader3}>Parceiros</span>
      <span className={Style.caixasheader4}>Fale Conosco</span>

      <div className={Style.menuContainer}>
        <button className={`${Style.btLogin} ${Style.btPerfil}`} onClick={handleMenuToggle}></button>
        {isMenuOpen && (
          <div className={Style.menu}>
            <Link to="#">Serviços</Link>
            <Link to="#">Perfil</Link>
            <Link to="#">Saldo</Link>
            <Link to="#">Configurações</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderLogada; <button className={`${Style.btLogin} ${Style.btPerfil}`}></button>