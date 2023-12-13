import React, { useState, useRef } from 'react';
import adicionar from '../images/addiperfil.png';
import Style from '../css/foto.module.css';

const Foto = () => {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const urlImagem = URL.createObjectURL(file);
      setImagemSelecionada(urlImagem);
    }
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  return (
    <div className={Style.profileContainer}>
      <div className={Style.imageContainer}>
        <label className={Style.imgInputContainer} onClick={handleImageClick}>
          {imagemSelecionada ? (
            <img
              className={`${Style.imagemSelecionada1} ${Style.customFileInput}`}
              src={imagemSelecionada}
              alt="Imagem do Perfil"
              style={{ width: '400px', height: '540px', objectFit: 'cover', borderRadius: '10px', cursor: 'pointer' }}
            />
          ) : (
            <>
              <img
                className={`${Style.adicionarImage} adicionarImage`}
                src={adicionar}
                alt="Adicionar imagem"
              />
            </>
          )}
          <input
            type="file"
            accept=".png, .jpg, .jpeg, .gif"
            onChange={handleImageChange}
            className={Style.fileInput}
            ref={inputRef}
            style={{ display: 'none' }}
          />
        </label>
      </div>
    </div>
  );
};

export default Foto;
