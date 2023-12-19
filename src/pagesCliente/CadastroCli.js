import Header from '../ComponentesIndex/Header';
import Footer from '../ComponentesIndex/Footer'
import Button from '../imagens/cadastroButtons.svg'
import Data from './Componentes/Data';
import Style from './css/cadastrocli.module.css';
import Senha from './Componentes/Senha';
import Inf from './Componentes/Inf';
import Local from './Componentes/local';
import Foto from './Componentes/foto';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function CadastroCli() {
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
    const navigate = useNavigate();
  
    

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

            navigate('/UsuarioDetalhes')
        }catch(error){
            alert(`Erro no cadastro. Tente novamente. \nCodigo Erro: ${error}`);
          }
    }

    return(
        <main className={Style.pageCadastro}>
            <Header />

            <div className={Style.buttonsAndFrase}>
                <img src={Button} alt='botões' />
                <p>Olá, seja bem-vindo! <br /> Crie sua conta:</p>
                <img src={Button} alt='botões' />
            </div>

            <Foto/>

            <Senha
            email={email}
            setEmail={setEmail}
            password={senha}
            setPassword={setSenha}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            passwordStrength= {passwordStrength}
            setPasswordStrength={setPasswordStrength} 
            />

            <Inf
             nomeCompleto={nomeCompleto}
             setnomeCompleto={setNome}
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

            <Data 
            DataNascimento={DataNascimento}
            setDataNascimento={setNascimento}
            />

            <Local
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

            

            <section className={Style.forms4}>
                <forms className={Style.checkbox}>
                <div className={Style.checkbox1}>
                    <input type="checkbox"/>
                    <label for="coding"> Eu aceito receber informações por e-mail sobre ofertas, serviços, produtos e eventos da Recostura ou de outras empresas<br/>parceiras.</label>
                </div>
                <div className={Style.checkbox1}>
                    <input type="checkbox"/>
                    <label for="coding"> Ao criar uma conta, você aceita e concorda com os <b>Termos Gerais e Condições de Uso</b> e que seus dados serão processados em<br/> conformidade com a da Recostura.</label>
                </div>
                </forms>

                <button onClick={clicar} className={Style.conectar}>BORA RECOSTURAR!</button>
            </section>

        <Footer/>

        </main>
    )
}

export default CadastroCli;