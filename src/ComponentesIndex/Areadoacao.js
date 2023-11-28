import Style from '../css/Areadoacao.module.css';
import linhas from '../imagens/linhasUPCYCLE.png';
import upcycle from '../imagens/imgUPCYCLEnoboton.png';
import botao from '../imagens/botaoUPCYCLE.png';
import ondas from '../imagens/linhasondas.png';

function Areadoacao(){
    return(
        <main className={Style.caixadoacao}>
            <img src={ondas} style={{position: 'absolute', width: '100%'}}/>
            <div>
                <img src={upcycle} style={{width:'500px', height: '600px'}}/>
                <img src={botao} style={{position: 'absolute', left: '60px', top: '1930px'}}/>
            </div>
            <div className={Style.caixadoar}>
                <p>Transformando retalhos em possibilidades e oportunidades!</p>
                <botton className={Style.botaodoar} type='submit'>Saiba mais</botton>
                <img src={linhas} style={{position: 'absolute', top: '1990px'}}/>
            </div>
        </main>
    )
}

export default Areadoacao;