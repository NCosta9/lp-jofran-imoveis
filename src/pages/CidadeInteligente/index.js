
import "./cidadeInteligente.css"
import pergolado from "./icons/pergolado.png"
import academia from "./icons/academia.png"
import areia from "./icons/areia.png"
import auditorio from "./icons/auditorio.png"
import batalhao from "./icons/batalhao.png"
import bicicletario from "./icons/bicicletario.png"
import capela from "./icons/capela.png"
import educacao from "./icons/educacao.png"
import infantil from "./icons/infantil.png"
import jogos from "./icons/jogos.png"
import mudas from "./icons/mudas.png"
import pet from "./icons/pet.png"
import poliesportiva from "./icons/poliesportiva.png"
import poupa from "./icons/poupa.png"
import praca from "./icons/praca.png"
import secretaria from "./icons/secretaria.png"
import tenis from "./icons/tenis.png"
import triangulo from "./icons/triangulo.png"





export default function cidadeinteligente() {

    return (
        <>
            <div id="cidadeI">
                <div className="header text-center">
                    <h1>LANÇAMENTO EM SANTO ANTÔNIO DO DESCOBERTO</h1>
                </div>

                <img className="logo d-flex mx-auto mt-5" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/logos/logo-cidade-inteligente.png?t=2024-04-16T19%3A33%3A25.243Z" />
                <div className="banner-cidadei">
                    <div class="container d-flex flex-column justify-content-center">
                        <div class="row justify-content-center">
                            <div class="col-lg-7 p-3  text-start order-1 order-lg-1 text-banner ">
                                <h2 className="ms-3">Invista já,</h2>
                                <h3 className="ms-3">em breve o melhor empreendimento de Santo Antônio do Descoberto- GO</h3>
                                <video className="abertura" autoPlay >
                                    <source src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/videos/video-lancamento-cidade-inteligente.mp4?t=2024-04-17T16%3A19%3A42.224Z" type="video/mp4" />
                                </video>
                            </div>
                            <div class="col-lg-4 offset-lg-1 p-0  overflow-hidden order-2 order-lg-2">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="oportunidade">

                    <div className=" container d-flex justify-content-center" >
                        <div className="row">
                            <div className="col">
                                <img src={triangulo} height="250px" />
                            </div>
                            <div className="col pt-5">
                                <h2 className="text-center mt-5">NÃO PERCA ESSA <br />OPORTUNIDADE</h2>

                            </div>
                        </div>

                    </div>


                    <p className="container">
                        O empreendimento Cidade Inteligente, contará com uma incrível infraestrutura oferecendo qualidade de vida, totalmente legalizado, inteligente, sustentável, e planejado próxima ao colegio militar com praças de convivência, e muito mais Se inscreva para ficar por dentro de todas as novidades sobre esse novo empreendimento revolucionário e não perder essa chance!</p>
                    <h2 className="text-loteamento text-center">O <span>LOTEAMENTO</span> CONTARÁ COM:</h2>

                    <div class="icons row row-cols-2 row-cols-sm-6 d-flex ">
                        <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={pergolado} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Pergolado</h4>

                        </div>
                        <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={bicicletario} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Bicicletários</h4>

                        </div>
                        <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={poliesportiva} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Quadra poliesportiva</h4>

                        </div>
                        <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={areia} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Quadra de Areia</h4>

                        </div>
                        <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={pet} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Espaço Pet</h4>

                        </div>
                        <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={praca} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Área de convivência</h4>

                        </div>  <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={academia} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Academia ao Ar Livre</h4>

                        </div>  <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={mudas} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Banco de Mudas</h4>

                        </div>  <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={tenis} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Quadra de Tênis</h4>

                        </div>  <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={jogos} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Praça de Jogos</h4>

                        </div>  <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={infantil} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Praça Infantil</h4>

                        </div>  <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={capela} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Capela</h4>

                        </div>  <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={educacao} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Secretaria de Educação</h4>

                        </div>  <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={secretaria} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Secretaria de Saúde</h4>

                        </div>  <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={auditorio} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Auditório</h4>

                        </div>  <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={poupa} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Poupa Tempo</h4>

                        </div>  <div class="col d-flex flex-column gap-4 mb-5">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center fs-4 rounded-3">
                                <img src={batalhao} height="84px" width="84px" />
                            </div>
                            <h4 class="fw-semibold mb-0 text-center text-light">Batalhão da Polícia</h4>

                        </div>


                    </div>

                </div>
                <div className="section-video">
                    <h2 className="sabermais">CONHEÇA<span>+</span>SOBRE <i>O EMPREENDIMENTO</i> </h2>
                    <video className="video" controls muted autoPlay loop>
                        <source src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/videos/video-cidade-inteligente.mp4?t=2024-04-17T15%3A59%3A25.277Z?autoplay=1" type="video/mp4" />
                    </video>
                    <a href="https://imobiliaria.jofranimoveis.com.br/cidade-inteligente" className="px-3"> <button>TENHA ACESSO AO EMPREENDIMENTO COM O MAIOR DESENVOLVIMENTO DA CIDADE </button></a>

                </div>


                <div className="footer">
                    <p className="mt-5" >
                        <img className="mt-4" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/logos/logo-FBZ-footer.png?t=2024-04-16T19%3A40%3A20.758Z" alt="logo construtora FBZ" height="60px" /><img className="mt-4" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/logos/logo-jofran-footer.png?t=2024-04-16T19%3A41%3A13.661Z" alt="logo imóbiliaria Jofran Imóveis" height="60px" />

                    </p>

                    <p>©2024 | Jofran imóveis | Creci 40.016/G0 | Todos os direitos reservados </p>
                </div>
            </div>


        </>
    )
}