import HeaderLogada from "../pages/HeaderLogada.js";
import React, { useState } from 'react';
import Style from '../pagesCliente/css/Acompanhamento.module.css';
import botao2 from '../imagens/botao2.png'
import pin from '../imagens/pin.png'
import botao3 from '../imagens/botao3.png'
import botao4 from '../imagens/botao4.png'
import { Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';



function Acompanhamento() {

    const [isCheckboxChecked, setCheckboxChecked] = useState(false);

    const handleCheckboxChange = () => {
      setCheckboxChecked(!isCheckboxChecked);
    };

    return(
        <main>

          <div className={Style.DetalhesPrincipal}>
            <HeaderLogada />
              </div>

            <div className={Style.caixatexto}>
                <p>Tudo certo, agora é com você!</p>
            </div>


            <div id={Style.imgbt}>
                <img src={botao2} alt='botao2' className={Style.imagembt}/>
                <img src={botao2} alt='botao2' className={Style.imagembt2}/>
            </div>

            <div className={Style.txt}>
            <p>Localização do Costureiro:</p>
            </div>


            <div id={Style.imgbt2}>
                <img src={pin} alt='pin' className={Style.imagembt3}/>
            </div>

            <div className={Style.textboxContainerlocal}>
        <input type="text" />
      </div>

            <div className={Style.checkboxContainer}>
          <input
            type='checkbox'
            checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
          />
          <label> Confirmo que estou levando o material a ser reparado. </label>
      </div>

      <div className={Style.seg}>
            <p>Para sua segurança seu código é:</p>
            </div>

            <div className={Style.caixasegur}>1305</div>

            <div id={Style.imgbt3}>
                <img src={botao3} alt='botao3' className={Style.imagembt4}/>
                <img src={botao4} alt='botao4' className={Style.imagembt5}/>
            </div>
            

            <div>
            <button id={Style.abrir}>CONFIRMAR!</button>
            </div>


            <div className={Style.statusContainer}>
            <p>Aguardando o costureiro confirmar sua chegada</p>
            <div className={Style.loadingIcon}></div>
            </div>

            <div>
        <button className={Style.cancelarButton}>cancelar costura</button>
      </div>


        </main>
    )
}

export default Acompanhamento;