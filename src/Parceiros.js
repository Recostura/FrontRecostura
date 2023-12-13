import HeaderLogada from "./pages/HeaderLogada";
import Style from './Parceiro.module.css';
import linha from './imagens/linhaimg.png';
import maos from './imagens/emogimaos.svg';
import upcycle from './imagens/imagemUpcycle.png';
import ajeitala from './imagens/imagemAjeitalar.png';
import imagem3 from './imagens/Imagem3parceiros.png';
import imagem4 from './imagens/Imagem4parceiros.png';
import unhcr from './imagens/imagemUNHCR.png';
import Footer from './ComponentesIndex/Footer';
import linhacurva from './imagens/linhaparceiros.png';


function Parceiros(){
    return(
        <main>
            <HeaderLogada/>
            <div className={Style.txtinicio}>
                Nossos Parceiros
            </div>
            <img src={linha} alt="linha" style={{backgroundColor: '#7BDAD7'}}/>
            <div className={Style.segundotexto}>
                <img src={maos} alt="linha"/>
                Nossos parceiros disponibilizam apoio, cursos<br></br> e recursos para melhor atendê-lo, saiba mais!
                <img src={maos} alt="linha"/>
            </div>
            <img src={linha} alt="linha" style={{backgroundColor: '#7BDAD7'}}/>
            <div className={Style.caixaimgedesc}>
                <p>TESTE</p>
                <img src={upcycle} alt="" style={{width: '400px', height: '400px'}}/>
                <img className={Style.linhacurvada} src={linhacurva} alt="linha"/>
            </div>
            <div className={Style.caixaimgedesc}>
                <img src={ajeitala} alt="" style={{width: '400px', height: '400px'}}/>
                <p>TESTE</p>
                <img className={Style.linhacurvada} src={linhacurva} alt="linha"/>
            </div>
            <div className={Style.caixaimgedesc}>
                <p>TESTE</p>
                <img src={imagem3} alt="" style={{width: '400px', height: '400px'}}/>
                <img className={Style.linhacurvada} src={linhacurva} alt="linha"/>
            </div>
            <div className={Style.caixaimgedesc}>
                <img src={imagem4} alt="" style={{width: '400px', height: '400px'}}/>
                <p>TESTE</p>
                <img className={Style.linhacurvada} src={linhacurva} alt="linha"/>
            </div>
            <div className={Style.caixaimgedesc}>
                <p>TESTE</p>
                <img src={unhcr} alt="" style={{width: '400px', height: '400px'}}/>
            </div>
            <Footer/>
        </main>
    )
}

export default Parceiros;