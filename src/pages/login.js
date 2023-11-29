
import Header from "../ComponentesIndex/Header";
import React, { useState } from 'react';
import Modal from './Modal';
import './css/login.css'

function Login() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <Header />
            <aside className="teste">
            
            </aside>

            <button className="butao" onClick={openModal}>MODAL</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />
        </div>
   
    )
}
export default Login;