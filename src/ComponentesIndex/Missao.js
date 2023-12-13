import Style from '../css/Missao.module.css';
import logoHome from '../imagens/logoHome.svg';

function Missao(){
    return (
        <section className={Style.missao}>
            <img src={logoHome} className={Style.logoHome} />
            <div className={Style.caixaTexto}>
                <p className={Style.textoMissao}>Recostura é uma plataforma que conecta costureiros locais a clientes em busca de serviços personalizados e acessíveis.</p>
            </div>
        </section>


    )
}

export default Missao;