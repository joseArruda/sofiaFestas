import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Adultos from './pages/Adultos';
import Criancas from './pages/Criancas';
import Header from './components/Header';
import Contato from './pages/Contato';
import Tabela from './pages/Tabela';
import Rodape from './components/Rodape';

import Erro from './pages/Erro';

function RoutesApp() {
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/adultos' element={ <Adultos/> }/>
            <Route path='/criancas' element={ <Criancas/> }/>
            <Route path='/contato' element={ <Contato/> }/>
            <Route path='/tabela' element={ <Tabela/> }/>

            <Route path='/*' element={ <Erro/> }/>
        </Routes>
        <Rodape/>
        </BrowserRouter>
    )
}

export default RoutesApp;