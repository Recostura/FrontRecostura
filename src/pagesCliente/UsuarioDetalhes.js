import React, { useState } from 'react';
import HeaderLogada from '../pages/HeaderLogada';
import Style from './css/UsuarioDetalhes.module.css';
import botao from '../imagens/botaoUPCYCLE.png';
import imgref from '../imagens/addimgref.png';
import { Link } from 'react-router-dom';

const SuaPagina = () => {
  const [nomeCliente, setNomeCliente] = useState('');
  const [tipoServico, setTipoServico] = useState('');
  const [valorServico, setValorServico] = useState('');
  const [dataHora, setDataHora] = useState('');
  const [comentario, setComentario] = useState('');
  const [concordaTermos, setConcordaTermos] = useState(false);
  const [imagem1, setImagem1] = useState('');
  const [imagem2, setImagem2] = useState('');
  const [imagem3, setImagem3] = useState('');

  const [imagem1URL, setImagem1URL] = useState('');
  const [imagem2URL, setImagem2URL] = useState('');
  const [imagem3URL, setImagem3URL] = useState('');

  const handleSubmit = () => {
    // Implemente a lógica para enviar os dados do formulário
    console.log('Dados do Formulário:', {
      nomeCliente,
      tipoServico,
      valorServico,
      dataHora,
      comentario,
      concordaTermos,
      imagem1,
      imagem2,
      imagem3,
    });

    // Limpar os campos após o envio
    setNomeCliente('');
    setTipoServico('');
    setValorServico('');
    setDataHora('');
    setComentario('');
    setConcordaTermos(false);
    setImagem1('');
    setImagem2('');
    setImagem3('');
  };

  const handleImagem1Change = (e) => {
    const file = e.target.files[0];
    setImagem1(file);
    setImagem1URL(URL.createObjectURL(file));
  };

  const handleImagem2Change = (e) => {
    const file = e.target.files[0];
    setImagem2(file);
    setImagem2URL(URL.createObjectURL(file));
  };

  const handleImagem3Change = (e) => {
    const file = e.target.files[0];
    setImagem3(file);
    setImagem3URL(URL.createObjectURL(file));
  };

  return (
    <main>
        <HeaderLogada/>
        <div className={Style.containerdetalhes}>

        <div className={Style.txtdetalhes}>
            <img src={botao} alt=''/>
            <p>Rasgou? Recosturou!</p>
            <img src={botao} alt=''/>
        </div>

        {/* Formulário */}
        <form className={Style.formulariodetalhes} onSubmit={handleSubmit}>

            <label className={Style.labeldetalhes}>Qual o tipo do serviço?</label>
            <input
                type="text"
                value={tipoServico}
                onChange={(e) => setTipoServico(e.target.value)}
                placeholder='Selecione uma opção : '
            />

            <label className={Style.labeldetalhes}>Valor do Serviço:</label>
            <input
                type="text"
                value={valorServico}
                onChange={(e) => setValorServico(e.target.value)}
                placeholder='R$150'
            />

            <div className={Style.dataHoraContainer}>
              <div className={Style.dataContainer}>
                <label className={Style.labeldetalhes}>Para quando você precisa?</label>
                <input
                  type="date"
                  value={dataHora.split('T')[0]}
                  onChange={(e) => setDataHora(`${e.target.value}T${dataHora.split('T')[1]}`)}
                />
              </div>
              <div className={Style.horaContainer}>
                <input
                  type="time"
                  value={dataHora.split('T')[1]}
                  onChange={(e) => setDataHora(`${dataHora.split('T')[0]}T${e.target.value}`)}
                />
              </div>
            </div>

            <label className={Style.labeldetalhes}>Serviço:</label>
            <textarea className={Style.comentarioservico}
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                placeholder='Escreva em detalhes como você gostaria que fosse feito o serviço de recostura:'
            ></textarea>

            <div className={Style.concordaTermosContainer}>
              <input
                type="checkbox"
                checked={concordaTermos}
                onChange={() => setConcordaTermos(!concordaTermos)}
              />
              <label className={Style.labelConcordaTermos}>
                Confirmo que estou ciente que o pagamento é feito diretamente<br></br> para o costureiro.
              </label>
            </div>

            <p className={Style.imgrefp}>Imagens para referência : </p>
            
            <div className={Style.caixa3img}>
            <div className={Style.inputContainer}>
            <label className={Style.imgInputContainer} htmlFor="imagem1">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImagem1Change}
                  />
                  {imagem1URL && <img className={Style.imagemSelecionada} src={imagem1URL} alt='Imagem selecionada' />}
                  {!imagem1URL && <img src={imgref} alt='Adicionar imagem'/>}
                </label>
              </div>

              <div className={Style.inputContainer}>
                <label className={Style.imgInputContainer}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImagem2Change}
                  />
                  {imagem2URL && <img className={Style.imagemSelecionada} src={imagem2URL} alt='Imagem selecionada' />}
                  {!imagem2URL && <img src={imgref} alt='Adicionar imagem' />}
                </label>
              </div>

              <div className={Style.inputContainer}>
                <label className={Style.imgInputContainer}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImagem3Change}
                  />
                  {imagem3URL && <img className={Style.imagemSelecionada} src={imagem3URL} alt='Imagem selecionada' />}
                  {!imagem3URL && <img src={imgref} alt='Adicionar imagem' />}
                </label>
              </div>
            </div>
          <Link to='/LocalizandoCostureiro' >
            <button className={Style.enviardetalhes}>TUDO CERTO!</button>
          </Link>
        
        </form>
        </div>
    </main>
  );
};

export default SuaPagina;
