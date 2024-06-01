import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import EmailSucesso from './errors/EmailSucesso';
import EmailFailed from './errors/EmailFailed';
import Fanpage from './pages/Fanpage';
import Cidadeinteligente from './pages/CidadeInteligente';
import Cards from './pages/Cards';


function RoutesApp() {
    return (

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home/>} />
                <Route path="/cads" element={<Cards/>}/>
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/sucesso" element={<EmailSucesso/>}/>
                <Route path="/sucesso" element={<EmailFailed/>}/>
                <Route path="/fanpage" element={<Fanpage/>}/>
                <Route path='/loteamento-cidade-inteligente-santo-antonio-do-descoberto' element={<Cidadeinteligente/>}/>


            </Routes>
        </BrowserRouter>


    )

}

export default RoutesApp;