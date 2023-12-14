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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
