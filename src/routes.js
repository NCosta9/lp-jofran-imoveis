import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import EmailSucesso from './errors/EmailSucesso';
import EmailFailed from './errors/EmailFailed';
import Fanpage from './pages/Fanpage';


function RoutesApp() {
    return (

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/sucesso" element={<EmailSucesso/>}/>
                <Route path="/sucesso" element={<EmailFailed/>}/>
                <Route path="/fanpage" element={<Fanpage/>}/>

            </Routes>
        </BrowserRouter>


    )

}

export default RoutesApp;