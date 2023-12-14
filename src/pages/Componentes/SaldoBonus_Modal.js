import React, { useState } from 'react';
import Style from './css/SaldoBonus_Modal.module.css';
import info from '../../imagens/interrogração.svg';


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
                        {/* Conteúdo do seu modal aqui */}
                        <p>Seu conteúdo modal vai aqui.</p>
                        <button onClick={fecharModal}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SaldoBonus;
