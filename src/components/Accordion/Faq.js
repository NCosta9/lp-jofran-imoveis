import Accordion from 'react-bootstrap/Accordion';
import CarouselEntregas from '../Carousel/CarouselEntregas'
import './styleFaq.css'

export default function Faq() {
  return (
    <>


      <section id="faq" className="faq">
        <div className="container-fluid" data-aos="fade-up">

          <div className="row gy-4">

            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-2">

              <div className="content px-xl-5">
                <h3>Perguntas <strong>Frequentes</strong></h3>
                <p>
                  Veja algumas perguntas frequentes que nossos clientes mais se faz.
                </p>
              </div>

              <Accordion className=" accordion px-xl-5" id="faqlist">

                <Accordion.Item className="accordion-item" data-aos="fade-up" data-aos-delay="200" eventKey="0">
                  <Accordion.Header className="accordion-header">
                    <h4>Qual é o valor da entrada necessária?</h4>
                  </Accordion.Header>
                  <Accordion.Body className='accordion-body' >
                   O Valor de entrada varia de acordo com a casa e o valor que o cliente deseja dar de entrada. Mas temos muitas casas que podem ser 100% financiada. <a href="https://imobiliaria.jofranimoveis.com.br/forms-lp">  -Falar com um consultor  </a>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item className="accordion-item" data-aos="fade-up" data-aos-delay="400" eventKey="1">
                  <Accordion.Header className="accordion-header">
                    <h4> Existem programas de incentivo ou subsídios disponíveis para compradores de primeira casa?</h4>
                  </Accordion.Header>
                  <Accordion.Body className='accordion-body' >
                  Sim, nós temos casas com direito a subsidio disponíveis de vários valores diferentes e nossos financiamentos são facilitados pelo programa minha casa, minha vida. Aumentando ainda mais suas chances de conquistar a casa própria. <a href="https://imobiliaria.jofranimoveis.com.br/forms-lp">  -Falar com um consultor  </a>  
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item className="accordion-item" data-aos="fade-up" data-aos-delay="600" eventKey="2">
                  <Accordion.Header className="accordion-header">
                    <h4> Quais são as políticas de renegociação do financiamento em caso de dificuldades financeiras? </h4>
                  </Accordion.Header>
                  <Accordion.Body className='accordion-body' >
                    ....
                  </Accordion.Body>
                </Accordion.Item>



              </Accordion>

            </div>

            <div class="col-lg-5 align-items-stretch order-1 order-lg-1 my-5">
              <CarouselEntregas />
            </div>
          </div>

        </div>
      </section>

    </>
  )
}