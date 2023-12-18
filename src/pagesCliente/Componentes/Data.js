import React, { useState } from 'react';
import Style from '../css/Data.module.css';

const Data = ({DataNascimento, setDataNascimento}) => {
  // const [dataNascimento, setDataNascimento] = useState({ dia: '', mes: '', ano: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validando se tem apenas digitoss
    if (/^\d+$/.test(value) || (name === 'mes' || name === 'ano')) {
      const numericValue = (value<10&&0 + "") + parseInt(value, 10);
      console.log(numericValue)
      setDataNascimento({ ...DataNascimento, [name]: String(numericValue)?.match(/\d+/g).join("") });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(DataNascimento);
  };

  return (
    <form onSubmit={handleSubmit} className={Style.formsDate}>
      <div className={Style.label1}>
        <label>Dia:</label>
        <select name="dia" value={parseInt(DataNascimento.dia)} onChange={handleChange}  className={Style.areaData}>
          <option value="">Dia</option>
          {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <div className={Style.label1}>
        <label>Mês:</label>
        <select name="mes" value={parseInt(DataNascimento.mes)} onChange={handleChange} required className={Style.areaData}>
          <option value="">Mês</option>
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4">Abril</option>
          <option value="5">Maio</option>
          <option value="6">Junho</option>
          <option value="7">Julho</option>
          <option value="8">Agosto</option>
          <option value="9">Setembro</option>
          <option value="10">Outubro</option>
          <option value="11">Novembro</option>
          <option value="12">Dezembro</option>
        </select>
      </div>
      <div className={Style.label1}>
        <label>Ano:</label>
        <select name="ano" value={parseInt(DataNascimento.ano)} onChange={handleChange} required className={Style.areaData}>
          <option value="">Ano</option>
          {Array.from({ length: 76 }, (_, index) => 1930 + index).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default Data