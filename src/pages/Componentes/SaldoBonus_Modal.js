import React, { useState } from 'react';
import Style from './css/SaldoBonus_Modal.module.css';
import info from '../../imagens/interrogração.svg';
import Fechar from '../../imagens/modalCostureiroFechar.svg';


const SaldoBonus = () => {
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => {
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
    };

    return (
        <div>
            <div className={Style.bonus}>
                <div className={Style.paragraph}>
                    <p>Saldo: R$30,00 (bonus)</p>
                </div>
                <div className={Style.buttonInfo} onClick={abrirModal}>
                    <img src={info} alt='ponto de interrogação' />
                </div>
            </div>

            {modalAberto && (
                <div className={Style.modalOverlay} onClick={fecharModal}>
                    <div className={Style.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={Style.textModal}>
                            <h2>Saldo Bonus</h2>
                            <p>A Recostura fica com apenas 10% do valor total do trabalho do costureiro como comissão, um valor pequenino, do tamanho de um botão. <br />
                                O Saldo de $30 é apenas uma cortesia gratuita da plataforma para que você, costureiro, entenda como ela funciona e sinta-se a vontade para realizar seus primeiros serviços.
                                <br /> Quando o saldo expirar, iremos te auxiliar para continuar recosturando seus sonhos!

                            </p>
                        </div>
                        <button onClick={fecharModal} className={Style.buttonModal}>
                            <img src={Fechar} alt='fechar' />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SaldoBonus;
