import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './hero.css'

export default function ProHero() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <section id="hero" class="">

        <div class="container d-flex flex-column justify-content-center">

          <div class="row justify-content-center">
            <div class="col-xl-8">
              <img className="mb-1 " src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/logos/logo-jofran-imoveis.png?t=2024-02-14T12%3A23%3A03.884Z" width="200px" />
              <h1> Encontre o Lar dos Seus Sonhos!</h1>
              <h2>Nós temos a casa perfeita para você e sua Familia. Porque?<br/> Veja o video sobre a Jofran Imóveis!</h2>
              <a onClick={handleShow} class="glightbox play-btn mb-4"></a>
            </div>
          </div>
        </div>
      </section>


      <Modal id="heromodal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video className="videohero" autoPlay >
            <source src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/videos/videointajofran.mp4?t=2024-05-31T15%3A41%3A30.445Z" type="video/mp4" />
          </video>
        </Modal.Body>
      </Modal>
    </>
  )
}