import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import './header.css'

function Header() {
  return (

    <>
      <Navbar id="header" className="">
        <Container>
          <Navbar.Brand href="#home">
           
            <button className='btn text-end'>Falar com Consultor</button>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;