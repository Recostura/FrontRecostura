<<<<<<< HEAD

import Header from '../ComponentesIndex/Header';
import Style from './css/Acompanhamento.module.css';

function Acompanhamento() {
    return(
        <main>
             <Header />
            <div className={Style.caixatexto}>
                <p>Tudo certo, agora é com você!</p>
            </div>
        </main>
=======
import HeaderLogada from '../pages/HeaderLogada';
import Style from '../pagesCliente/css/Acompanhamento.module.css';
import botao from '../imagens/cadastroButtons.svg';
import linhas from '../imagens/linhashomes.svg';
import { NavLink } from 'react-router-dom';
import StatusServicoVisualizacao from './Componentes/StatusServicoVisualizacao';


function Acompanhamento(){

    const fases = [
        'Cliente trouxe o material a ser reparado?',
        'Costura em andamento?',
        'Finalizando...',
        'Tudo Pronto!'
    ];

    return(
        <section className={Style.principalAcompanhamento}>
            <HeaderLogada />
            <div className={Style.AcompanhamentoCliente}>
                <div className={Style.acompanhamento} >
                <img src={botao} alt="Botão" className={Style.botao} />
                <h1 className={Style.txtAcompanhamento}>Atualização costureira:</h1>
                <img src={botao} alt="Botão" className={Style.botao} />
                </div>
            </div>
            <section className={Style.StatusAcompanhamento}>
            <StatusServicoVisualizacao />
            </section>
           
            <img src={linhas} alt="linhas" className={Style.linhasAviso}/>

            <div className={Style.principalAviso}>
                <div className={Style.caixaAviso}>
                        <h1 className={Style.txtAviso}>Aguarde a sinalização ficar verde para confirmação!</h1>
                        <img className={`${Style.btCodigo} ${Style.btLeft}`} src={botao} alt="Botão" />
                        <img className={`${Style.btCodigo} ${Style.btRight}`} src={botao} alt="Botão" />
                </div>
            </div>

            <section className={Style.fimDetalhes}>
            <NavLink to='#'>
                <button className={Style.btConfirmar2} type="submit">
                    CONFIRMAR!
                </button>
            </NavLink>

           <NavLink to='#' > 
                <button className={Style.btCancelar2} type="submit">
                    
                    CANCELAR COSTURA
                
                </button>
           </NavLink>
            </section>

        </section>


>>>>>>> 4827312d60e2d52e9140e3767b52136f1bd5536e
    )
}

export default Acompanhamento;