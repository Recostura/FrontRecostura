import HeaderLogada from "../pages/HeaderLogada.js";
import Style from '../pagesCostureiro/css/CodigoSeguranca.module.css';
import cadeado from '../imagens/iconCadeado.svg';
import botao from '../imagens/cadastroButtons.svg';
import { NavLink } from 'react-router-dom';

function CodigoSeguranca(){
    return(
        <div className={Style.principalCodigo}>
            <HeaderLogada />
            <div className={Style.CodigoSeguranca}>
                <div className={Style.caixaTxtIcon}>
                <img src={cadeado} alt="Cadeado" />
                <h1 className={Style.txtCodigo}>Código de Segurança</h1>
                <img src={cadeado} alt="Cadeado" />
                </div>
            </div>
            <div className={Style.txtPergunta}>
                <h2>Cliente Chegou?</h2>
                <h2>Confirme o código de segurança:</h2>
                <div className={Style.caixaCodigo}>
                    <h1 className={Style.numeroCodigo}>1305</h1>
                    <img className={`${Style.btCodigo} ${Style.btLeft}`} src={botao} alt="Botão" />
                    <img className={`${Style.btCodigo} ${Style.btRight}`} src={botao} alt="Botão" />
                </div>

                <NavLink to='/StatusServico' >    
                 <button className={Style.btConfirmar} type="submit">CONFIRMAR</button>
                 </NavLink>

            </div>

           
        </div>

    )
}

export default CodigoSeguranca;