import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import HeaderLogada from '../pages/HeaderLogada';
import Style from '../pagesCostureiro/css/CostureiroPerfil.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fotoperfil1 from '../imagens/imgperfilpedro.png';
import fotoperfil2 from '../imagens/imgperfiljagua.png';
import imgplanos from '../imagens/modalplanos.png';
import adicionar from '../imagens/addperfil.png';
import botao from '../imagens/botaoUPCYCLE.png';
import imgref from '../imagens/addimgref.png';

// Componente para o Modal de Tipo de Serviço
const TypeServiceModal = ({ show, handleClose, handleServiceSelection }) => {
  return (
    <Modal show={show} onHide={handleClose} className={Style.caixamodal}>
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// Componente para o Modal de Planos de Assinatura
const SubscriptionPlansModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} className={Style.caixamodal}>
      <Modal.Header closeButton>
        <Modal.Title>Planos de Assinatura</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imgplanos} alt="Imagem de Plano de Assinatura" className={Style.imagemModal} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Assinar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const CostureiroPerfil = () => {
  const [formData, setFormData] = useState({
    nome: '',
    usuario: '',
    comentario: '',
    tiposervico: '',
    valorservico: '',
    avaliacao1: '',
    avaliacao2: '',
  });

  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const urlImagem = URL.createObjectURL(file);
      setImagemSelecionada(urlImagem);
    }
  };

  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showPlansModal, setShowPlansModal] = useState(false);

  const handleShowServiceModal = () => setShowServiceModal(true);
  const handleCloseServiceModal = () => setShowServiceModal(false);

  const handleServiceSelection = (selectedService) => {
    setFormData((prevData) => ({
      ...prevData,
      tiposervico: selectedService,
    }));
    handleCloseServiceModal();
  };

  const handleShowPlansModal = () => setShowPlansModal(true);
  const handleClosePlansModal = () => setShowPlansModal(false);

  const [imagem1, setImagem1] = useState('');
  const [imagem2, setImagem2] = useState('');
  const [imagem3, setImagem3] = useState('');

  const [imagem1URL, setImagem1URL] = useState('');
  const [imagem2URL, setImagem2URL] = useState('');
  const [imagem3URL, setImagem3URL] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Lógica para enviar os dados do formulário para o servidor

    // Limpar os campos após o envio
    setFormData({
      nome: '',
      usuario: '',
      comentario: '',
      tiposervico: '',
      valorservico: '',
      avaliacao1: '',
      avaliacao2: '',
    });

    setImagem1('');
    setImagem2('');
    setImagem3('');
    setImagem1URL('');
    setImagem2URL('');
    setImagem3URL('');
    setImagemSelecionada(null);
  };

  return (
    <main className={Style.fundomain}>
      <HeaderLogada />

      <form className={Style.forms} onSubmit={handleSubmit}>
        <div className={Style.profileContainer}>
          <div className={Style.imageContainer}>
            {imagemSelecionada ? (
              <img
                src={imagemSelecionada}
                alt="Imagem do Perfil"
                className={Style.imagemPerfil}
                style={{ width: '300px', height: '400px' }}
              />
            ) : (
              <>
                <label className={Style.customFileInput}>
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg, .gif"
                    onChange={handleImageChange}
                  />
                  <img className={Style.addpf} src={adicionar} alt="Escolher Imagem" />
                </label>
              </>
            )}
          </div>

          <div className={Style.column1}>
            <h1 style={{ color: '#9F988F' }}>Seu Perfil</h1>
            <input
              className={Style.camponome}
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              placeholder="Nome"
              required
            />
            <input
              className={Style.campousuario}
              type="text"
              id="usuario"
              name="usuario"
              value={formData.usuario}
              onChange={(e) => setFormData({ ...formData, usuario: e.target.value })}
              placeholder="Nome de usuário"
              required
            />
            <textarea
              className={Style.campocomentario}
              id="comentario"
              name="comentario"
              value={formData.comentario}
              onChange={(e) => setFormData({ ...formData, comentario: e.target.value })}
              placeholder="Biografia"
              style={{ height: '200px', resize: 'none' }}
            ></textarea>
          </div>
        </div>

        <div className={Style.column2}>
          <h1 style={{ color: '#9F988F' }}>Meu Serviço</h1>
          <div className={Style.tiposervicoContainer}>
            <div className={Style.tiposervicoText}>
              Tipo de Serviço: {formData.tiposervico}
              <Button variant="primary" onClick={handleShowServiceModal}>
                Selecionar
              </Button>
            </div>
          </div>

          <input
            className={Style.valorservico}
            type="text"
            id="valorservico"
            name="valorservico"
            value={formData.valorservico}
            onChange={(e) => setFormData({ ...formData, valorservico: e.target.value })}
            placeholder="Valor do Serviço"
          />
        </div>

        <h1 className={Style.txtcarrosel}>
          Hora de divulgar o seu trabalho! <br />
          Coloque as melhores fotos:
        </h1>

        <div className={Style.caixa3img}>
          <div className={Style.inputContainer}>
            <label className={Style.imgInputContainer} htmlFor="imagem1">
              <input
                type="file"
                accept="image/*"
                id="imagem1"
                onChange={(e) => handleImagem1Change(e)}
                style={{ display: 'none' }}
              />
              {imagem1URL && (
                <img className={Style.imagemSelecionada} src={imagem1URL} alt='Imagem selecionada' />
              )}
              {!imagem1URL && <img src={imgref} alt='Adicionar imagem' />}
            </label>
          </div>

          <div className={Style.inputContainer}>
            <label className={Style.imgInputContainer} htmlFor="imagem2">
              <input
                type="file"
                accept="image/*"
                id="imagem2"
                onChange={(e) => handleImagem2Change(e)}
                style={{ display: 'none' }}
              />
              {imagem2URL && (
                <img className={Style.imagemSelecionada} src={imagem2URL} alt='Imagem selecionada' />
              )}
              {!imagem2URL && <img src={imgref} alt='Adicionar imagem' />}
            </label>
          </div>

          <div className={Style.inputContainer}>
            <label className={Style.imgInputContainer} htmlFor="imagem3">
              <input
                type="file"
                accept="image/*"
                id="imagem3"
                onChange={(e) => handleImagem3Change(e)}
                style={{ display: 'none' }}
              />
              {imagem3URL && (
                <img className={Style.imagemSelecionada} src={imagem3URL} alt='Imagem selecionada' />
              )}
              {!imagem3URL && <img src={imgref} alt='Adicionar imagem' />}
            </label>
          </div>
        </div>

        <div className={Style.avaliacaoContainer}>
          <h1>Avaliação</h1>

          <div className={Style.avaliacaoItem}>
            <div className={Style.fotoNomeContainer}>
              <img src={fotoperfil1} alt="Foto do Usuário 1" className={Style.fotoPerfil} />
              <h2 className={Style.nomeUsuario}>@PEDROCAS</h2>
            </div>
          </div>

          <div className={Style.avaliacaoItem}>
            <div className={Style.avaliacaoContent}>
              <div className={Style.avaliacaoTexto}>
                Adorei, atendimento muito bom e trabalho bem feito!
              </div>
            </div>
          </div>

          <div className={Style.avaliacaoItem}>
            <div className={Style.fotoNomeContainer}>
              <img src={fotoperfil2} alt="Foto do Usuário 2" className={Style.fotoPerfil} />
              <h2 className={Style.nomeUsuario}>@JAGUATIRICA</h2>
            </div>
          </div>

          <div className={Style.avaliacaoItem}>
            <div className={Style.avaliacaoContent}>
              <div className={Style.avaliacaoTexto}>
                Maravilhosa, costura muito bem e é muito educada.
              </div>
            </div>
          </div>

          <div className={Style.modalSection}>
            <Button variant="primary" onClick={handleShowPlansModal} className={Style.botaoassinatura}>
              Planos de Assinatura
            </Button>

            <TypeServiceModal
              show={showServiceModal}
              handleClose={handleCloseServiceModal}
              handleServiceSelection={handleServiceSelection}
            />

            <SubscriptionPlansModal
              show={showPlansModal}
              handleClose={handleClosePlansModal}
            />
          </div>

          <button type="submit" className={Style.avaliacaoBtn}>
            BORA COSTURAR!
          </button>
        </div>
      </form>

      <footer className={Style.footer}>
        {/* Conteúdo do footer, como links, texto, etc. */}
      </footer>
    </main>
  );
};

export default CostureiroPerfil;
