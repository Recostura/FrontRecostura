import React, { useState } from 'react';
import Style from '../css/infopessoal.module.css';

const Inf = ({nomeCompleto, setnomeCompleto, userName, setUserName, cpf, setCpf, cpfValido, setCPFValido, celular, numeroCelularValido, setNumeroCelularValido, setTelefone}) => {
  // const [nomeCompleto, setnomeCompleto] = useState('');
  // const [userName, setUserName] = useState('');
  // const [cpf, setCpf] = useState('');
  // const [celular, setCelular] = useState('');
  // const [cpfValido, setCpfValido] = useState(true);
  // const [numeroCelularValido, setNumeroCelularValido] = useState(true);

  const validarCPF = (cpf) => {
    return cpf.replace(/[^\d]/g, '').length === 11;
  };

  const formatarCPF = (cpf) => {
    const cleanedCPF = cpf.replace(/[^\d]/g, '');

    if (cleanedCPF.length <= 3) {
      return cleanedCPF;
    } else if (cleanedCPF.length <= 6) {
      return `${cleanedCPF.slice(0, 3)}.${cleanedCPF.slice(3)}`;
    } else if (cleanedCPF.length <= 9) {
      return `${cleanedCPF.slice(0, 3)}.${cleanedCPF.slice(3, 6)}.${cleanedCPF.slice(6)}`;
    } else {
      return `${cleanedCPF.slice(0, 3)}.${cleanedCPF.slice(3, 6)}.${cleanedCPF.slice(6, 9)}-${cleanedCPF.slice(9)}`;
    }
  };

  const formatarCelular = (numero) => {
    const cleanedNumero = numero.replace(/[^\d]/g, '');

    if (cleanedNumero.length <= 2) {
      return `(${cleanedNumero}`;
    } else if (cleanedNumero.length <= 7) {
      return `(${cleanedNumero.slice(0, 2)}) ${cleanedNumero.slice(2)}`;
    } else {
      return `(${cleanedNumero.slice(0, 2)}) ${cleanedNumero.slice(2, 7)}-${cleanedNumero.slice(7, 11)}`;
    }
  };

  const handleCelularChange = (e) => {
    const newCelular = e.target.value;
    const formattedCelular = formatarCelular(newCelular).slice(0, 15); // Limita a 15 caracteres após a formatação
    setTelefone(formattedCelular);

    const cleanedNumero = formattedCelular.replace(/[^\d]/g, '');
    const numeroValido = cleanedNumero.length === 11;


    setNumeroCelularValido(numeroValido);
  };

  const handleCPFChange = (e) => {
    const newCPF = e.target.value;
    const formattedCPF = formatarCPF(newCPF).slice(0, 14); // Limita a 14 caracteres após a formatação
    setCpf(formattedCPF);

    setCPFValido(validarCPF(newCPF));
  };

  return (
    <section className={Style.forms2}>
      <p className={Style.tit}>Informações Pessoais</p>
      <form className={Style.infoPessoal}>
        <input
          className={Style.nome}
          type="text"
          placeholder="Nome Completo:"
          value={nomeCompleto}
          onChange={(e) => setnomeCompleto(e.target.value)}
        />
        <br />

        <input
        className={Style.nome2}
          type="text"
          placeholder="Nome de Usuário:"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />

        <input
        className={Style.cpf}
          type="text"
          placeholder="CPF:"
          value={cpf}
          onChange={handleCPFChange}
        />
        {!cpfValido && <p style={{ color: 'red' }}>CPF inválido</p>}
        <br />

        <div className={Style.divNumero}>
          <div className={Style.ddd}>
            <p>+55</p>
          </div>
          <input
            type="text"
            placeholder="Celular"
            className={Style.numero}
            value={celular}
            onChange={handleCelularChange}
          />
          {!numeroCelularValido && <p style={{ color: 'red' }}>Número de celular inválido</p>}
          <br />
        </div>
      </form>
    </section>
  );
};

export default Inf;