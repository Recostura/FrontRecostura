
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import ClienteInicial from './pagesCliente/ClienteInicial';
import ClientePedido from './pagesCliente/ClientePedido';
import Acompanhamento from './pagesCliente/Acompanhamento';
import EncontreCostureiro from './pagesCliente/EncontreCostureiro';
import CostureiroPerfil from './pagesCostureiro/CostureiroPerfil';
import CostureiroServicos from './pagesCostureiro/CostureiroServicos';
import DetalhesDoPedido from './pagesCostureiro/DetalhesDoPedido';
import StatusServico from './pagesCostureiro/StatusServico';
import CodigoSeguranca from './pagesCostureiro/CodigoSeguranca';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route exact path='/' element={<Index />} />
          <Route exact path='login' element={<Login />} />
          <Route exact path='Cadastro' element={<Cadastro />} />
          <Route exact path='ClienteInicial' element={<ClienteInicial />} />
          <Route exact path='CientePedido' element={<ClientePedido />} />
          <Route exact path='EncontreCostureiro' element={<EncontreCostureiro />} />
          <Route exact path='Acompanhamento' element={<Acompanhamento />} />
          <Route exact path='CostureiroPerfil' element={<CostureiroPerfil />} />
          <Route exact path='CostureiroServicos' element={<CostureiroServicos />} />
          <Route exact path='DetalhesDoPedido' element={<DetalhesDoPedido />} />
          <Route exact path='StatusServico' element={<StatusServico />} />
          <Route exact path='CodigoSeguranca' element={<CodigoSeguranca />} />


        </Routes>
      </Router>
      
      
      
    </div>
  );
}

export default App;
