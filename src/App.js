
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages';
import Cadastro from './pages/cadastro';
import ClienteInicial from './pagesCliente/ClienteInicial';
import ClientePedido from './pagesCliente/ClientePedido';
import Acompanhamentocliente from './pagesCliente/Acompanhamentocliente';
import Acompanhamento from './pagesCliente/AtualizacaoPedido';
import EncontreCostureiro from './pagesCliente/EncontreCostureiro';
import CostureiroPerfil from './pagesCostureiro/CostureiroPerfil';
import CostureiroServicos from './pagesCostureiro/CostureiroServicos';
import DetalhesDoPedido from './pagesCostureiro/DetalhesDoPedido';
import StatusServico from './pagesCostureiro/StatusServico';
import CodigoSeguranca from './pagesCostureiro/CodigoSeguranca';
import AvaliacaoCostureira from './pagesCliente/AvaliacaoCostureira';
import UsuarioDetalhes from './pagesCliente/UsuarioDetalhes';
import CadastroCli from './pagesCliente/CadastroCli';
import LocalizandoCostureiro from './pagesCliente/LocalizandoCostureiro';
import Parceiros from './Parceiros';
import AtualizacaoPedido from './pagesCliente/AtualizacaoPedido'
import SobreNos from './pagesCliente/SobreNos';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route exact path='/' element={<Index />} />
          <Route exact path='Cadastro' element={<Cadastro />} />
          <Route exact path='CadastroCli' element={<CadastroCli />} />
          <Route exact path='ClienteInicial' element={<ClienteInicial />} />
          <Route exact path='CientePedido' element={<ClientePedido />} />
          <Route exact path='EncontreCostureiro' element={<EncontreCostureiro />} />
          <Route exact path='Acompanhamentocliente' element={<Acompanhamentocliente />} />
          <Route exact path='Acompanhamento' element={<Acompanhamento />} />
          <Route exact path='CostureiroPerfil' element={<CostureiroPerfil />} />
          <Route exact path='AvaliacaoCostureira' element={<AvaliacaoCostureira />} />
          <Route exact path='CostureiroServicos' element={<CostureiroServicos />} />
          <Route exact path='DetalhesDoPedido' element={<DetalhesDoPedido />} />
          <Route exact path='StatusServico' element={<StatusServico />} />
          <Route exact path='CodigoSeguranca' element={<CodigoSeguranca />} />
          <Route exact path='UsuarioDetalhes' element={<UsuarioDetalhes />} />
          <Route exact path='LocalizandoCostureiro'element={<LocalizandoCostureiro />} />
          <Route exact path='Parceiros' element={<Parceiros />} />
          <Route exact path='AtualizacaoPedido' element={<AtualizacaoPedido />} />
          <Route exact path='SobreNos' element={<SobreNos />} />



        </Routes>
      </Router>
      
      
      
    </div>
  );
}

export default App;
