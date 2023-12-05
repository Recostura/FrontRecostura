import React, { useState } from 'react';
import Style from './css/Date.module.css';

const FormularioDataNascimento = () => {
  const [dataNascimento, setDataNascimento] = useState({ dia: '', mes: '', ano: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataNascimento({ ...dataNascimento, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataNascimento);
  };

  return (
    <form onSubmit={handleSubmit} className={Style.formsDate}>
      <div className={Style.label1}>
        <label>Dia</label>
        <input type="number" name="dia" value={dataNascimento.dia} onChange={handleChange} min="1" max="31" required />
      </div>
      <div className={Style.label2}>
        <label>Mes:</label>
        <input type="number" name="mes" value={dataNascimento.mes} onChange={handleChange} min="1" max="12" required />
      </div>
      <div className={Style.label3}>
        <label>Ano:</label>
        <input type="number" name="ano" value={dataNascimento.ano} onChange={handleChange} min="1900" max="2022" required />
      </div>
    </form>
  );
};

export default FormularioDataNascimento;