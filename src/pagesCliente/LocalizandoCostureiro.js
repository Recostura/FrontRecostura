// LocalizandoCostureiro.js

import React from 'react';
import Style from '../pagesCliente/css/LocalizandoCostureiro.module.css';
import HeaderLogada from '../pages/HeaderLogada';
import botao from '../imagens/cadastroButtons.svg';
import { Link } from 'react-router-dom';

function LocalizandoCostureiro() {
  return (
    <section className={Style.PrincipalLocalizando}>
      <HeaderLogada />
      <div className={Style.localizeCostureiro}>
        <div className={Style.localize}>
          <img src={botao} alt="Botão" className={Style.botao} />
          <h1 className={Style.txtEncontre}>Encontre o costureiro mais perto de você!</h1>
          <img src={botao} alt="Botão" className={Style.botao} />
        </div>
      </div>
      <div className={Style.mapaPrincipal}>
       
      
        
        <iframe className={Style.caixaMapa}
        
          title="Senac Lapa Tito"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.5121845304194!2d-46.69959038496259!3d-23.523720603578007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce598e9f384af7%3A0xd232a6f16a171cd4!2sSenac%20Lapa%20Tito!5e0!3m2!1sen!2suk!4v1645685723065!5m2!1sen!2suk"
        >
             
        </iframe>
            
         <input className={Style.inputCEP} type="text" placeholder="Digite seu CEP:" />
        <Link to="/EncontreCostureiro">
        <button className={Style.encontreButton}>ENCONTRE</button>
        </Link>
       
      </div>
    </section>
  );
}

export default LocalizandoCostureiro;
