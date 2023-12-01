import React, { useState } from 'react';
import Modal from 'react-modal';
import Style from '../pages/css/Modal.module.css';
import logoHome from '../imagens/logoHome.svg';
import botao from '../imagens/cadastroButtons.svg';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');

function ModalLogin({ isOpen, onRequestClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Adicione sua lógica de autenticação aqui
    console.log('Usuário:', username, 'Senha:', password);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal de Login"
      className={Style.Modal}
      overlayClassName={Style.Overlay}
    >
      <div className={Style.headerModal}>
        <img src={logoHome} className={Style.logoHome} alt="Logo" />
      </div>
      <div className={Style.bemvindo}>
        <img src={botao} alt="Botão" />
        <h1 className={Style.txtBemvindo}>Seja Bem-vindo(a)</h1>
        <img src={botao} alt="Botão" />
      </div>

      
        <section className={Style.campologin}>
          <form onSubmit={handleLogin}>
            <input
              className={Style.input1}
              type="text"
              value={username}
              placeholder="Login:"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <input
              className={Style.input2}
              type="password"
              value={password}
              placeholder="Senha:"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <p className={Style.esqsenha}>
              <Link className={Style.estilolink} to="#">
                Esqueci minha senha
              </Link>
            </p>
            <button type="submit">BORA LÁ ?</button>
          </form>
          <p className={Style.crieconta}>
            Não tem uma conta?{' '}
            <Link className={Style.estilolink} to="#">
              Quero cadastrar
            </Link>
          </p>
        </section>
      
    </Modal>
  );
}

export default ModalLogin;
