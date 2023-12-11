// StatusServicoVisualizacao.js
import React from 'react';
import Style from '../css/StatusServicoVisualizacao.module.css';


function StatusServicoVisualizacao() {
  const fases = [
    'Cliente trouxe o material a ser reparado?',
    'Costura em andamento?',
    'Finalizando...',
    'Tudo Pronto!'
  ];

  return (
    <div className={Style.StatusPrincipal}>
      <div className={Style.Atualizacao}>
        {fases.map((fase, index) => (
          <div className={Style.atualizacaoItem} key={index}>
            <div className={Style.fraseContainer}>
              <h2 className={Style.txtInfoCliente}>{fase}</h2>
            </div>
            <div className={Style.btContainer}>
              <div className={Style.btParteVisivel}></div>
              <div className={Style.btMetade}></div>
              <div className={Style.btMetade}></div>
            </div>
          </div>
        ))}
      </div>

      
      
    </div>
  );
}

export default StatusServicoVisualizacao;
