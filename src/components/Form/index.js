import './Form.css'
import SendOrcamento from "../../Utils/SendOrcamento";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

export default function Form() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const { register, handleSubmit, getValues } = useForm();

    //Envia todos os dados do formulario por meio de uma url do whatsapp
    const formValues = getValues();

    const nome = `${formValues.nome}`
    const cpf = `${formValues.cpf}`
    const nascimento = `${formValues.nascimento}`
    const trabalho = `${formValues.trabalho}`
    const renda = `${formValues.renda}`
    const whatsapp = `${formValues.zap}`
    const email = `${formValues.email}`

    //Dados para envio via Email
    const assunto = "Cadastro no Site";
    const cabecalho = "Ja recebemos as informações do seu " + assunto + " ,dentro de alguns instantes entraremos em contato com mais informações. Verifique abaixo se as informações que recebemos se estão todas corretas: ";


    return (

        <>
            <div id="cadastro" class="container py-5">
                <div class="bg-lighte px-4 mt-3 rounded m-0">
                        <img class="logo" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/logos/logo-jofran-imoveis.png?t=2024-02-14T12%3A23%3A03.884Z" />


                    <h1 class="display-4 fw-bold fs-2 lh-1 text-body-emphasis mb-3">Vamos começar esta jornada juntos!</h1>
                    <p class="col-lg-10 fs-5 text-dark"> Preencha o formulário com as informações necessárias para entendermos o seu perfil e um de nossos consultores entrar em contato com você para agendar uma visita.</p>
                    {/* <a class="btn btn-lg btn-primary" href="/" role="button">Voltar a página anterior »</a> */}

                </div>
                <img className='tempo mb-5' src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/linha%20do%20tempo.png" />
                <form id="forms" class="row g-3 p-4 z-3 rounded-3 shadow-lg">

                    <h4 className="f-4 fw-semibold mb-0" >1° passo</h4>
                    <h2 className="f-3 fw-bold mt-0">De uma vida nova!</h2>

                    <hr className="my-4" />
                    <div className="mb-3 form-floating">
                        <input type="text" className="form-control shadow-sm" {...register("nome", { required: true })} />
                        <label className="fw-bold">Nome completo:</label>
                    </div>
                    <div className="col-md-6 mb-3 form-floating">
                        <input type="cpf" className="form-control shadow-sm" {...register("cpf", { required: true })} />
                        <label className="fw-bold">CPF:</label>
                    </div>
                    <div className="col-md-6 mb-3 form-floating">
                        <input
                            type="date"
                            id="date"
                            className="form-control shadow-sm"
                            {...register("nascimento", { required: true })}
                        />
                        <label className="fw-bold">Data de Nascimento:</label>
                    </div>


                    <label className="d-flex fw-bold mb-2">
                        Você trabalha atualmente de:
                    </label>

                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input rounded-3"
                            type="radio"
                            id="inlineRadio1"
                            value="Autônomo"
                            {...register("trabalho")}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio1">
                            Autônomo
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input rounded-3"
                            type="radio"
                            id="inlineRadio2"
                            value="CLT"
                            {...register("trabalho")}
                            checked
                        />
                        <label className="form-check-label" htmlFor="inlineRadio2">
                            CLT
                        </label>
                    </div>
                    <br />
                    <label className="form-label mt-3 fw-bold mb-0" htmlFor="inlineRadio2">
                        Qual sua renda familiar atual?

                    </label>
                    <div className='col-md-6'>


                        <select className="form-select form-select-lg"  {...register("renda", { required: true })}>

                            <option value="1.000-2.000" selected>1.000-2.000</option>
                            <option value="2.000-3.000">2.000-3.000</option>
                            <option value="4.000-5.000">4.000-5.000</option>
                            <option value="Superior a 5.000">Superior a 5.000</option>

                        </select>
                        <div className="form-text text-light mb-3">
                            Você deve somar apenas a renda dos contribuintes que será adicionado no financiamento.
                        </div>
                    </div>


                    <div className="col-md-6 mb-3 form-floating">
                        <input
                            type="tel"
                            id="zap02"
                            className="form-control shadow-sm"
                            {...register("zap", { required: true })}
                        />
                        <label className="fw-bold">Contato Whatsapp:</label>
                    </div>
                    <div className="co-md-12 mb-3 form-floating">
                        <input
                            type="email"
                            id="email"
                            className="form-control shadow-sm"
                            {...register("email", { required: true })}
                        />
                        <label className="fw-bold">E-mail:</label>
                        <div className="form-text text-light mb-3">
                            Esse email será utilizado para acessar todos os paineis do cliente e
                            acessar os aplicativos escolhidos.{" "}
                        </div>
                    </div>



                    <button
                        className="w-100 btn btn-lg btn-primary"
                        type="button"
                        onClick={handleSubmit(handleShow)}

                    >
                        <i className="bi bi-whatsapp text-light me-2"></i>
                        Enviar
                    </button>
                    <hr class="my-4" />
                    <small class="text-body-light">*Todas as informações fornecidas nesse formulário estão seguros e são de inteira responsabilidade da Jofran Imóveis.</small>

                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header>
                            <Modal.Title>
                                <h4 className="mt-2 fw-bold">Informações:</h4>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Após clicar em "Enviar", dentro de alguns instantes um de nossos consultores realizará o seu atendimento!</p>
                            <p>Horario de atendimento: <b>Segunda a Sexta das 9h às 17h.</b> </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <SendOrcamento
                                text="Enviar"
                                nome={nome}
                                cpf={cpf}
                                nascimento={nascimento}
                                trabalho={trabalho}
                                renda={renda}
                                telefone={whatsapp}
                                email={email}
                                assunto={assunto}
                                cabecalho={cabecalho}


                            />
                        </Modal.Footer>
                    </Modal>

                </form>




            </div>
            <div className='bg-dark m-0 text-light text-center py-3'>
                <div class="copyright">
                    &copy; Copyright <strong><span>JOFRAN IMOVEIS CONSTRUTORA E IMOBILIARIA LTDA, CNPJ : 26.712.485/0001-30, CRECI-PJ: 40.016/GO </span></strong>. Todos os direitos reservados
                </div>
            </div>

        </>
    )
}