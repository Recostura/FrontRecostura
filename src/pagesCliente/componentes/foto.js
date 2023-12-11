import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Foto = () => {
  const [foto, setFoto] = useState(null);
  const [fotoURL, setFotoURL] = useState(null);

  const onDrop = (acceptedFiles) => {
    const selectedFoto = acceptedFiles[0];
    setFoto(selectedFoto);

    const fotoURL = URL.createObjectURL(selectedFoto);
    setFotoURL(fotoURL);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleClickFoto = () => {
    // Abra a janela de seleção de arquivo quando a foto for clicada
    document.getElementById('fotoInput').click();
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '500px', marginTop: '50px', marginLeft: '180px'}}>
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} id="fotoInput" style={{ display: 'none' }} />
        {isDragActive ? (
          <p>Solte a foto aqui...</p>
        ) : (
          <>
            <p onClick={handleClickFoto}>Arraste e solte a foto aqui, ou clique para selecionar</p>
            <div
              style={{ marginLeft: '20px', width: '400px', height: '540px', overflow: 'hidden', borderRadius: '5px', cursor: 'pointer' }}
              onClick={handleClickFoto}
            >
              {fotoURL && (
                <img
                  src={fotoURL}
                  alt="Foto de perfil"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Foto;
