import './banner.css'

export default function Banner2() {
    return (
        <>


            <section className="banner2">

                <div class="container d-flex flex-column justify-content-center">

                    <div class="row justify-content-center">
                        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3 text-start order-1 order-lg-1">

                            <h1 class="display-4 fw-bold lh-1 ">CASAS ATÉ 100% FINANCIADAS</h1>
                            <h2 class="fs-3"> 
                            <ul>
                                <li> Desconto de até 55 mil reais </li>
                                <li> Financiamento "Minha Casa Minha Vida" </li>
                            </ul>
                            </h2>
                            <a className='btn' src="https://jofranimoveis.com.br/imoveis/a-venda">Ver catálogo de Imóveis</a>
                        </div>
                        <div class="col-lg-4 offset-lg-1 p-0  overflow-hidden order-2 order-lg-2">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}