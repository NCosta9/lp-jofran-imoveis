import { Link } from 'react-router-dom'
import './styleCta.css'

export default function ProCta() {
    return (
        <>
            <section id="cta" class="cta" data-aos="fade-up" data-aos-duration="1000">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-9 text-center text-lg-start">
                            <h3>Descubra agora a casa dos seus sonhos e transforme sua vida!</h3>
                            <p>Vamos encontrar a casa perfeita e com as melhores condições para você sair do aluguel a partir de agora! </p>
                        </div>
                        <div class="col-lg-3 cta-btn-container text-center">
                            <Link class="cta-btn align-middle" to="cadastro">Quero uma casa própria</Link>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}