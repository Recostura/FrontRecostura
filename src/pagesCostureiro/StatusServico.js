// StatusServico.js

import HeaderLogada from "../pages/HeaderLogada.js";
import Style from '../pagesCostureiro/css/StatusServico.module.css';
import botao from '../imagens/cadastroButtons.svg';
import linhas from '../imagens/linhashomes.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import aguardando from '../imagens/aguardando.png';
import iconCelular from '../imagens/iconCelular.png';

function StatusServico() {
    const [buttonStates, setButtonStates] = useState([false, false, false, false]);
    const [confirmacaoChecked, setConfirmacaoChecked] = useState(false);

    const handleButtonClick = (index) => {
        const newButtonStates = [...buttonStates];
        newButtonStates[index] = !newButtonStates[index];
        setButtonStates(newButtonStates);
    };

    const handleConfirmacaoChange = () => {
        setConfirmacaoChecked(!confirmacaoChecked);
    };

    const fases = [
        'Cliente trouxe o material a ser reparado?',
        'Costura em andamento?',
        'Finalizando...',
        'Tudo Pronto!'
    ];

    return (
        <div className={Style.StatusPrincipal}>
            <HeaderLogada />
            <div className={Style.TituloPagina}>
                <div className={Style.titulo}>
                    <img src={iconCelular} alt="Celular" className={Style.iconCelular}/>
                    <h1 className={Style.txtDetalhes}>Atualizações...</h1>
                    <img src={iconCelular} alt="Celular" className={Style.iconCelular}/>
                </div>
            </div>

            <section className={`${Style.Atualizacao} ${Style.divContainer}`}>
                {fases.map((fase, index) => (
                    <div className={Style.atualizacaoItem} key={index}>
                        <div className={Style.fraseContainer}>
                            <h2 className={Style.txtInfoCliente}>{fase}</h2>
                        </div>
                        <div className={`${Style.btContainer} ${Style.divContainer}`}>
                            <button
                                className={`${Style.btAtualizacao} ${buttonStates[index] ? Style.btClicado : Style.btNaoClicado}`}
                                type="button"
                                onClick={() => handleButtonClick(index)}
                            >
                                {/* Parte visível */}
                                <div className={Style.btParteVisivel}></div>
                                {/* Metade vermelha */}
                                <div className={Style.btMetade}></div>
                                {/* Metade verde (oculta quando não clicado) */}
                                {buttonStates[index] && <div className={Style.btMetade}></div>}
                            </button>
                        </div>
                    </div>
                ))}
            </section>

            <div className={Style.PrincipalMensagem}>
                <div className={Style.flexContainer}>
                    <img src={aguardando} className={Style.aguardando} />
                    <h2 className={Style.MensagemAguardando}>Aguardando o cliente buscar o produto...</h2>
                </div>
            </div>

            {/* Nova frase abaixo da mensagem de aguardo com checkbox */}
            <div className={Style.confirmacaoServico}>
                <input
                    type="checkbox"
                    id="confirmacaoCheckbox"
                    className={Style.checkbox}
                    checked={confirmacaoChecked}
                    onChange={handleConfirmacaoChange}
                />
                <label htmlFor="confirmacaoCheckbox" className={Style.checkboxLabel}>
                    <h2 className={Style.txtConfirmacao}>
                        Eu confirmo que o serviço foi finalizado de acordo com a demanda estabelecida pelo cliente e o mesmo já obteve posse do produto.
                    </h2>
                </label>
            </div>

            <img src={linhas} className={Style.linhahome} />

            <section className={Style.fimDetalhes}>
                <NavLink to='/CostureiroServicos'>
                    <button className={Style.btFinalizar} type="submit">
                        Serviço finalizado
                    </button>
                </NavLink>

                <NavLink to='#' >
                    <button className={Style.btProblema} type="submit">
                        Relatar Problema
                    </button>
                </NavLink>
            </section>
        </div>
    );
}

export default StatusServico;
