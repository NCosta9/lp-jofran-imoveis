import './banner.css'

export default function Banner2() {
    return (
        <>


            <section className="banner2">

                <div class="container d-flex flex-column justify-content-center">

                    <div class="row justify-content-center">
                        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3 text-start order-1 order-lg-1">
                            <img class="perfil mb-5" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/logos/logo-jofran-imoveis.png?t=2024-02-14T12%3A23%3A03.884Z" />

                            <h1 class="display-4 fw-bold lh-1 ">CASAS ATÉ 100% FINANCIADAS</h1>
                            <h2 class="fs-3 text-light">Sua nova casa está esperando por você na <b>Jofran Imoveis</b>.</h2>

                        </div>
                        <div class="col-lg-4 offset-lg-1 p-0  overflow-hidden order-2 order-lg-2">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}