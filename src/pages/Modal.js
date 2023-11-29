import React from 'react';
import Modal from 'react-modal';
import './css/Modal.css';
import logoHome from '../imagens/logoHome.svg';
import botao from '../imagens/cadastroButtons.svg';

Modal.setAppElement('#root');

function ModalLogin({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="headerModal"><img src={logoHome} className="logoHome" /></div>
      <div className="bemvindo"><img src={botao} /><h1 className="txtBemvindo">Seja Bem-vindo(a)</h1> <img src={botao} /></div>
      <div className="parteLogin">
      
      </div>
    </Modal>
  );
}

export default ModalLogin;