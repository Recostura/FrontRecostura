
import Header from '../ComponentesIndex/Header';
import Style from './css/Acompanhamento.module.css';

function Acompanhamento() {
    return(
        <main>
             <Header />
            <div className={Style.caixatexto}>
                <p>Tudo certo, agora é com você!</p>
            </div>
        </main>
    )
}

export default Acompanhamento;