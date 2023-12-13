import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import HeaderLogada from '../pages/HeaderLogada';
import Style from '../pagesCliente/css/AvaliacaoCostureira.module.css';
import botao from '../imagens/botaoUPCYCLE.png';
import foto from '../imagens/imgperfilavaliacao.png';
import fita from '../imagens/imgfitametrica.png';
import { Link } from 'react-router-dom';

const AvaliacaoCostureira = () => {
  const [avaliacao, setAvaliacao] = useState(null);
  const [comentario, setComentario] = useState('');

  const handleAvaliacao = (novaAvaliacao) => {
    setAvaliacao(novaAvaliacao);
  };

  const handleEnviarAvaliacao = () => {
    console.log('Avaliação:', avaliacao);
    console.log('Comentário:', comentario);
    setAvaliacao(null);
    setComentario('');
  };

  return (
    <main>
        <HeaderLogada/>
        <div className={Style.ContainerAvaliacao}>
        <div className={Style.txtinicio}>
            <img src={botao} alt=''/>
            <p>Avaliação Costureira : </p>
            <img src={botao} alt=''/>
        </div>

        <div className={Style.campofoto}>
            <img src={fita} alt=''/>
            <img src={foto} alt="Foto da Costureira" style={{ width: '220px', height: '220px'}}/>
            <img src={fita} alt=''/>
        </div>

        <div className={Style.nomecostureira}>
            <p>ROSANGELA DA SILVA</p>
        </div>

        <div className={Style.containerestrela}>
            {[1, 2, 3, 4, 5].map((valor, index) => (
            <FaStar
                key={index}
                onClick={() => handleAvaliacao(valor)}
                color={avaliacao >= valor ? '#ffc107' : '#e4e5e9'}
                size={80}
                style={{ margin: '0.8em', cursor: 'pointer' }}
            />
            ))}
        </div>

        <textarea className={Style.caixacomentario} 
            placeholder="Adicione um comentário:" 
            value={comentario} 
            onChange={(e) => setComentario(e.target.value)}
        ></textarea>

        <Link to='/EncontreCostureiro' > 
        <button className={Style.botaoenviaravaliacao} type="button" onClick={handleEnviarAvaliacao}>
            FINALIZAR RECOSTURA
        </button>
        </Link>

        <p className={Style.ultimotexto}>Recosturando seus sonhos! </p>

        </div>
    </main>
    );
};

export default AvaliacaoCostureira;
