import "./oportunidade.css"
export default function Oportunidades() {
    return (
        <>
            <div class="container col-md-9 col-sm-12 " id="oportunidade">
            <div class="section-title mt-5">
                    <h2 >Oportunidades</h2>
                    <span className="linha"></span>
                </div>
                {/* <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 pb-5">
                    <div class="col"> */}
                        <div class="card card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg mt-0" style={{backgroundImage:`url("https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/fundo/fundo%20santo%20antonio.webp?t=2024-05-04T16%3A20%3A28.064Z")` }}>
                            <div class="d-flex flex-column h-100 px-4 pb-3 text-white text-shadow-1">
                                <h3 class="pt-5 mt-5 mb-4 display-3 lh-1 fw-bold">Novo lançamento-<br/> Loteamento Cidade Inteligente</h3>
                                <p className="fs-5">Se inscreva para ficar por dentro dessa novidade em Santo Antônio do Descoberto,<br/> e garantir sua promoção de lançamento!</p>
                                <ul class="d-flex flex-wrap list-unstyled mt-auto">
                                    <li class="me-auto">
                                        <img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/logos/logo-cidade-inteligente.png?t=2024-04-16T19%3A33%3A25.243Z" alt="Bootstrap" width="150"  class=""/>
                                    </li>
                                    <li class="d-flex align-items-center me-3">
                                        <a className="btn btn-warning btn-lg fw-bold mt-4" href="/loteamento-cidade-inteligente-santo-antonio-do-descoberto">Saiba Mais</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        {/* </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}