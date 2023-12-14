import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';  // Certifique-se de importar corretamente os componentes necessários
import HeaderLogada from '../pages/HeaderLogada';
import Style from './css/UsuarioDetalhes.module.css';
import botao from '../imagens/botaoUPCYCLE.png';
import imgref from '../imagens/addimgref.png';

const TypeServiceModal = ({ show, handleClose, handleServiceSelection }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Selecione o tipo de serviço</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="primary" onClick={() => handleServiceSelection('Costura Geral')}>
          Costura Geral
        </Button>
        <Button variant="primary" onClick={() => handleServiceSelection('Costura Complexa')}>
          Costura Complexa
        </Button>
        <Button variant="primary" onClick={() => handleServiceSelection('Pequenos Reparos')}>
          Pequenos Reparos
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const SuaPagina = () => {
  const [nomeCliente, setNomeCliente] = useState('');
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
  const [showServiceModal, setShowServiceModal] = useState(false);

  const [tipoServico, setTipoServico] = useState('');
  const [selectedServicePlaceholder, setSelectedServicePlaceholder] = useState('Qual o tipo de serviço?');

  const handleShowServiceModal = () => setShowServiceModal(true);
  const handleCloseServiceModal = () => setShowServiceModal(false);

  const handleServiceSelection = (selectedService) => {
    setTipoServico(selectedService);
    setSelectedServicePlaceholder(selectedService);
    handleCloseServiceModal();
  };

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
    setImagem1URL('');
    setImagem2URL('');
    setImagem3URL('');
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

  const [showPlansModal, setShowPlansModal] = useState(false);

  const handleShowPlansModal = () => setShowPlansModal(true);
  const handleClosePlansModal = () => setShowPlansModal(false);

  const handleInputChange = (e, field) => {
    const value = e.target.value;
  
    // Remova caracteres não numéricos, exceto dígitos, vírgula e ponto decimal
    const sanitizedValue = value.replace(/[^\d,.]/g, '');
  
    // Substitua vírgulas por pontos (padrão de número decimal no JavaScript)
    const normalizedValue = sanitizedValue.replace(/,/g, '.');
  
    // Atualize o estado
    switch (field) {
      case 'valorServico':
        setValorServico(normalizedValue);
        break;
      case 'comentario':
        setComentario(value);
        break;
      // Adicione outros campos aqui conforme necessário
      default:
        break;
    }
  };

  const formatCurrency = (value) => {
    // Verifica se o valor é um número válido
    if (!isNaN(value)) {
      // Converte o valor para um número com duas casas decimais
      const floatValue = parseFloat(value);
      
      // Formata como moeda brasileira
      const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
  
      // Retorna a string formatada
      return formatter.format(floatValue);
    } else {
      // Se o valor não for um número válido, retorna uma string vazia
      return '';
    }
  };

  const handleNumericInput = (digit) => {
    // Remove caracteres não numéricos, exceto dígitos, vírgula e ponto decimal
    const sanitizedInput = digit.replace(/[^\d,.]/g, '');
  
    // Substitui vírgulas por pontos (padrão de número decimal no JavaScript)
    const normalizedInput = sanitizedInput.replace(/,/g, '.');
  
    // Atualiza o estado com o novo valor
    setValorServico(normalizedInput);
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
            <div className={Style.tiposervicoContainer}>
            <div className={Style.tiposervicoText}>
              Tipo de Serviço: {tipoServico || selectedServicePlaceholder}
              <Button variant="primary" onClick={handleShowServiceModal}>
                Selecionar
              </Button>
            </div>
          </div>

          <TypeServiceModal
           show={showServiceModal}
          handleClose={handleCloseServiceModal}
          handleServiceSelection={handleServiceSelection}
      />

<input
  type="text"
  value={formatCurrency(valorServico)}
  onChange={(e) => handleInputChange(e, 'valorServico')}
  placeholder="R$0,00"
  className={Style.seuEstilo}
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
            <textarea
              className={Style.comentarioservico}
              value={comentario}
              onChange={(e) => handleInputChange(e, 'comentario')}
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

            <button className={Style.enviardetalhes} type="submit">TUDO CERTO!</button>
        </form>
        </div>
    </main>
  );
};

export default SuaPagina;
