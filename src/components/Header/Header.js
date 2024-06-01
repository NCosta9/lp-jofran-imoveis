import "./header.css"


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
  return (
    <>
      <section id="topbar" className="d-flex align-items-center">

        <div className="container d-flex justify-content-center ">
          <div className="contact-info d-flex align-items-center">
            <a href="">
            <img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/logos/LOGO%20VECTOR.png?t=2024-04-24T15%3A40%3A12.366Z" alt="" />
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex gap-1 py-4  d-none d-sm-inline-flex" aria-current="true">
              <i className="bi bi-geo-alt-fill mt-1"></i>
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 class="mb-2 fw-bold">Faça uma Visita</h6>
                  <p class="mb-0 opacity-75">Quadra 70,4- Loja 01, Centro</p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex gap-1 py-4  mx-3  d-none d-sm-inline-flex" aria-current="true">
              <i className="bi bi-telephone-outbound-fill mt-1"></i>
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 class="mb-2 fw-bold">Precisando de Ajuda?</h6>
                  <p class="mb-0 opacity-75 ">Ligue para: (61) 99610-2277</p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex gap-1 py-4  mx-3  d-none d-sm-inline-flex" aria-current="true">
              <i className="bi bi-alarm-fill mt-1"></i>
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 class="mb-2 fw-bold">Seg. a Sex.: 9h-17h</h6>
                  <p class="mb-0 opacity-75">Estamos te esperando</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {['md'].map((expand) => (
        <Navbar id="header" key={expand} expand={expand} className="">
          <Container fluid>
            <Navbar.Brand className="logo ms-5">

            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 mt-3 me-5">
                  <Nav.Link href="/">Página inicial</Nav.Link>
                  <Nav.Link href="/sobre">Sobre</Nav.Link>
                  <Nav.Link href="https://www.jofranimoveis.com.br/imoveis/a-venda">Compre seu Imóvel</Nav.Link>
                  <Nav.Link href="https://imobiliaria.jofranimoveis.com.br/meu-imovel">Venda seu Imóvel</Nav.Link>
                  <Nav.Link href="https://imobiliaria.jofranimoveis.com.br/anuncie-seu-imovel">Anuncie seu imóvel</Nav.Link>
                  <Nav.Link href="https://blog.jofranimoveis.com.br">Blog</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="/">Home</a></li>
              <li><a className="nav-link scrollto" href="/sobre">Sobre</a></li>
              <li><a className="nav-link scrollto" href="https://imobiliaria.jofranimoveis.com.br/meu-imovel">Venda</a></li>
              <li><a className="nav-link scrollto " href="https://www.jofranimoveis.com.br/imoveis/a-venda">Catálogo</a></li>
              <li><a className="nav-link scrollto" href="https://blog.jofranimoveis.com.br">Blog</a></li>
              <li><a className="nav-link scrollto" href="https://imobiliaria.jofranimoveis.com.br/forms-lp">Contato</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav> */}
    </>
  );
}