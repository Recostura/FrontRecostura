// CostureiroPerfil.js

import React, { useState, useRef } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import HeaderLogada from '../pages/HeaderLogada';
import Style from '../pagesCostureiro/css/CostureiroPerfil.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import carroselpf1 from '../imagensCarrosel/CarroselPerfil (1).png';
import carroselpf2 from '../imagensCarrosel/CarroselPerfil (2).png';
import carroselpf3 from '../imagensCarrosel/CarroselPerfil (3).png';
import fotoperfil1 from '../imagens/imgperfilpedro.png';
import fotoperfil2 from '../imagens/imgperfiljagua.png';
import imgplanos from '../imagens/modalplanos.png';
import imgcaixaperfil from '../imagens/fundoimgperfil.png'
import adicionar from '../imagens/addperfil.svg';

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Lógica para lidar com a imagem selecionada (pode ser adicionada aqui)
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

  const handleNext = () => {
    // Lógica para avançar no carrossel
  };

  const handlePrev = () => {
    // Lógica para retroceder no carrossel
  };

  const carouselRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Lógica para enviar os dados do formulário para o servidor
  };

  return (
    <main className={Style.fundomain}>
      <HeaderLogada />

      <form className={Style.forms} onSubmit={handleSubmit}>
        <div className={Style.profileContainer}>
          <div className={Style.imageContainer}>
            <img src={imgcaixaperfil}/>
            <img className={Style.addpf} src={adicionar}/>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
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

        <Carousel
          id="carouselExampleControls"
          className={Style.customCarousel}
          ref={carouselRef}
          interval={null} // Desativa o intervalo automático
        >
          <Carousel.Item>
            <div className={Style.carouselRow}>
              <img
                className={`d-inline-block w-33 ${Style.carouselImage}`}
                src={carroselpf1}
                alt="Imagem 1"
              />
              <img
                className={`d-inline-block w-33 ${Style.carouselImage}`}
                src={carroselpf2}
                alt="Imagem 2"
              />
              <img
                className={`d-inline-block w-33 ${Style.carouselImage}`}
                src={carroselpf3}
                alt="Imagem 3"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={Style.carouselRow}>
              <img
                className={`d-inline-block w-33 ${Style.carouselImage}`}
                src={carroselpf1}
                alt="Imagem 1"
              />
              <img
                className={`d-inline-block w-33 ${Style.carouselImage}`}
                src={carroselpf2}
                alt="Imagem 2"
              />
              <img
                className={`d-inline-block w-33 ${Style.carouselImage}`}
                src={carroselpf3}
                alt="Imagem 3"
              />
            </div>
          </Carousel.Item>
        </Carousel>

        <div className={Style.carouselControls}>
          <button
            className={`btn ${Style.carouselControl}`}
            type="button"
            onClick={handlePrev}
          >
            Anterior
          </button>
          <button
            className={`btn ${Style.carouselControl}`}
            type="button"
            onClick={handleNext}
          >
            Próximo
          </button>
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
