import Header from '../ComponentesIndex/Header';
import Footer from '../ComponentesIndex/Footer'
import Button from '../imagens/cadastroButtons.svg'
import info from '../imagens/interrogração.svg'
import Style from './css/cadastro.module.css'
import InfoPessoalForm from './Componentes/pessoainfo';
import Cep from './Componentes/cep';
import { Link } from "react-router-dom";
import SenhaCadastro from './Componentes/SenhaCadastro';
import SaldoBonus from './Componentes/SaldoBonus_Modal';  
import FormularioDataNascimento from './Componentes/DataNascimento';      

import React, { useState } from 'react';

function Cadastro() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nomeCompleto, setNome] = useState('');
    const [userName, setUsername] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [DataNascimento, setNascimento] = useState('');
    const [cep, setCep] = useState('');
  
    // Estados e funções do componente SenhaCadastro
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
  
    // Estados e funções do componente InfoPessoalForm
    const [cpfValido, setCPFValido] = useState(true);
    const [numeroCelularValido, setNumeroCelularValido] = useState(true);
  
    // Estados e funções do componente Cep
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');
  
    

    const clicar = (e) => {
        try{

            e.preventDefault();
            const pessoa = {email, senha, nomeCompleto, userName, cpf,telefone, dataNascimento: `${DataNascimento.ano}-${DataNascimento.mes}-${DataNascimento.dia}`, cep, endereco, bairro, estado, pais}
            console.log(pessoa)
              
            fetch("http://localhost:8080/recostura/pessoa", {
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(pessoa),

            }).then(() =>{
                console.log("certin sô")
            })

            setEmail ('')
            setSenha ('')
            setNome ('')
            setUsername ('')
            setCpf ('')
            setTelefone ('')
            setNascimento ('')
            setCep ('')
            setEndereco('')
            setBairro('')
            setEstado('')
            setPais ('')

        }catch(error){
            alert(`Erro no cadastro. Tente novamente. \nCodigo Erro: ${error}`);
          }
    }

    return (
        <main className={Style.pageCadastro}>
            <Header />

            <div className={Style.buttonsAndFrase}>
                <img src={Button} alt='botões' />
                <p>Olá, Costureiro(a)! <br /> Crie sua conta:</p>
                <img src={Button} alt='botões' />
            </div>

            <SenhaCadastro
            email={email}
            setEmail={setEmail}
            password={senha}
            setPassword={setSenha}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            passwordStrength= {passwordStrength}
            setPasswordStrength={setPasswordStrength} 
            />

            <InfoPessoalForm
            nomeCompleto={nomeCompleto}
            setNomeCompleto={setNome}
            userName={userName}
            setUserName={setUsername}
            cpf={cpf}
            setCpf={setCpf}
            cpfValido={cpfValido}
            setCPFValido={setCPFValido}
            celular={telefone}
            numeroCelularValido={numeroCelularValido}
            setNumeroCelularValido={setNumeroCelularValido}
            setTelefone={setTelefone}
             />

             <FormularioDataNascimento
             DataNascimento={DataNascimento}
             setDataNascimento={setNascimento}
             />

            <Cep 
             cep={cep}
             setCep={setCep}
             endereco={endereco}
             setEndereco={setEndereco}
             bairro={bairro}
             setBairro={setBairro}
             estado={estado}
             setEstado={setEstado}
             pais={pais}
             setPais={setPais}
            />

            
            
            <SaldoBonus />


            <section className={Style.forms4}>
                <forms className={Style.checkbox}>
                    <div className={Style.checkbox1}>
                        <input type="checkbox" />
                        <label for="coding"> Eu aceito receber informações por e-mail sobre ofertas, serviços, produtos e eventos da Recostura ou de outras empresas<br />parceiras.</label>
                    </div>
                    <div className={Style.checkbox1}>
                        <input type="checkbox" />
                        <label for="coding"> Ao criar uma conta, você aceita e concorda com os <b>Termos Gerais e Condições de Uso</b> e que seus dados serão processados em<br /> conformidade com a da Recostura.</label>
                    </div>
                </forms>
                <Link to='/CostureiroPerfil' className={Style.linkButton}>
                    <button onClick={clicar} className={Style.conectar} >BORA COSTURAR!</button>
                </Link>
            </section>

            <Footer />

        </main>
    )
}

export default Cadastro;