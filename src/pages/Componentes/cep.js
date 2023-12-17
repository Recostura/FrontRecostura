import React, { useState, useEffect } from 'react';
import Style from './css/cep.module.css';

const Cep = ({cep, setCep, endereco, setEndereco, bairro, setBairro, estado, setEstado, pais, setPais}) => {
  // const [cep, setCep] = useState('');
  // const [endereco, setEndereco] = useState('');
  // const [bairro, setBairro] = useState('');
  // const [estado, setEstado] = useState('');
  // const [pais, setPais] = useState('');

  useEffect(() => {
    const consultarCep = async () => {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
          alert('CEP não encontrado. Verifique o CEP e tente novamente.');
        } else {
          setEndereco(data.logradouro);
          setBairro(data.bairro);
          setEstado(data.uf);
          setPais('Brasil'); // Você pode ajustar conforme necessário
        }
      } catch (error) {
        console.error('Erro ao consultar CEP:', error);
      }
    };

    if (cep.length === 8) {
      consultarCep();
    } else {
      // Limpar campos se o CEP for apagado
      setEndereco('');
      setBairro('');
      setEstado('');
      setPais('');
    }
  }, [cep]);

  const handleCepChange = (event) => {
    const newCep = event.target.value;
    setCep(newCep);
  };

  return (
    <section className={Style.forms3}>
      <p className={Style.forms3_Text}>Localização</p>
      
      <form className={Style.localizacao}>
        <div className={Style.cep_rua}>
          <input
            type="text"
            placeholder="CEP:"
            className={Style.ceep}
            value={cep}
            onChange={handleCepChange} />
          <br />

          <input 
            type="text" 
            placeholder="Rua:" 
            className={Style.rua} 
            value={endereco} />
          <br />
        </div> <br />

        <div className={Style.nBairro}>
          <input 
            type="text" 
            placeholder="Nº:" 
            className={Style.Nº} />
          <br />

          <input 
            type="text" 
            placeholder="Bairro:" 
            className={Style.bairro} 
            value={bairro} />
          <br />
        </div> <br />

        <div className={Style.estado_país}>
          <input 
            type="text" 
            placeholder="Estado:" 
            className={Style.estado} 
            value={estado} />
          <br />
          <input 
            type="text" 
            placeholder="País:" 
            className={Style.país} 
            value={pais} />
          <br />
        </div>
      </form>

    </section>
  );
};

export default Cep;
