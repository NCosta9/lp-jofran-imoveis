import SendOrcamento from "../../Utils/SendOrcamento";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import '../../index.css'



export default function ProContact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const { register, handleSubmit, getValues } = useForm();

  //Envia todos os dados do formulario por meio de uma url do whatsapp
  const formValues = getValues();

  const nome = `${formValues.nome}`
  const telefone = `${formValues.telefone}`
  const email = `${formValues.email}`
  const mensagem = `${formValues.mensagem}`

  //Dados para envio via Email
  const assunto = "Novo Orçamento";
  const cabecalho = "Ja recebemos as informações para seu " + assunto + " ,dentro de alguns instantes entraremos em contato com mais informações. Verifique abaixo se as informações que recebemos estão corretas: ";



  return (
    <>
      <section id="contact" className="contact" data-aos="fade-up" data-aos-duration="1500">
        <div className="container">

          <div className="section-title">
            <h2>Contato</h2>
            <p>Estamos aqui para ouvir, colaborar e transformar suas ideias em ações tangíveis. Entre em contato conosco e vamos construir juntos o futuro digital da sua marca.</p>
          </div>
        </div>


        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
          <div class="row align-items-center g-lg-5 py-5">

            <div class="col-md-10 mx-auto col-lg-5 order-2 order-lg-1">
              <div className="col-lg-8 mt-5 mt-lg-0">

                <form id="forms" className="p-4 p-md-5 border z-3 rounded-3  shadow-lg position-absolute top-0 start-50 translate-middle">

                  <h4 className="f-4 fw-semibold mb-0" >Bem vindo</h4>
                  <h2 className="f-3 fw-bold mt-0">a sua vida nova!</h2>

                  <hr className="my-4" />

                  <div className="form-floating mb-3">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Seu Nome..." {...register("nome", { required: true })} required />

                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="tel" className="form-control" name="telefone" id="subject" placeholder="Seu Whatsapp..." {...register("telefone", { required: true })} required />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div className="checkbox mb-3">
                    <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                  </div>
                  
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Mensagem descrevendo o que você deseja.."{...register("mensagem", { required: true })} required></textarea>
                </div>
                
                <button
                    className="mt-2"
                    type="button"
                    onClick={handleSubmit(handleShow)}

                  > Enviar</button>
                  <hr className="my-4" />
                  <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                </form>

              </div>

              <div class="col-lg-7 text-center text-lg-start order-1 order-lg-2 p-5">
                <h1 class="display-4 fw-bold fs-2 lh-1 text-body-emphasis mb-3">Vamos começar esta jornada juntos!</h1>
                <p class="col-lg-10 fs-5 text-dark text-center"> Preencha o formulário abaixo para agendar uma visita ou entre em contato conosco para obter mais informações.</p>
              </div>

            </div>
          </div>



          <div className="container">

            <div className="row mt-5">




              <form className="php-email-form ">
                {/* <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Seu Nome..." {...register("nome", { required: true })} required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="tel" className="form-control" name="telefone" id="subject" placeholder="Seu Whatsapp..." {...register("telefone", { required: true })} required />
                  </div>
                  <div className="form-group mt-3">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Seu email..." {...register("email", { required: true })} required />
                  </div>
                </div>

                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Mensagem descrevendo o que você deseja.."{...register("mensagem", { required: true })} required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button
                    className="mt-2"
                    type="button"
                    onClick={handleSubmit(handleShow)}

                  >
                    <i className="bi bi-whatsapp text-light me-2"></i>
                    Enviar mensagem
                  </button>
                </div> */}

                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header>
                    <Modal.Title>
                      <h4 className="mt-2 fw-bold">Informações:</h4>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Após recebermos sua mensagem, dentro de alguns instantes entraremos em contato em um dos meios de contato fornecido nos campos de contato!</p>
                    <p>Horario de atendimento: <b>Segunda a Sexta das 8h às 17h.</b> </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <SendOrcamento
                      text="Enviar mensagem"
                      nome={nome}
                      telefone={telefone}
                      email={email}
                      assunto={assunto}
                      cabecalho={cabecalho}
                      mensagem={mensagem}


                    />
                  </Modal.Footer>
                </Modal>



              </form>

            </div>

          </div>

        </div>
      </section>

    </>
  )
}