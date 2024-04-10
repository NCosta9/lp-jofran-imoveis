import './banner.css'

export default function Banner1() {
    return (
        <>
            <section id="main-banner" className='p-4'>
                <div className='row'>
                    <div className="col-lg-6 p-5">
                        <img className="perfil mb-5" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/logos/logo-jofran-imoveis.png?t=2024-02-14T12%3A23%3A03.884Z" />
                        <h1 className="display-2 fw-bold lh-1 "><span>CASAS ATÉ 100% </span>FINANCIADAS</h1>
                        <p className="fs-2 ">Sua nova casa está esperando por você!</p>

                    </div>
                    <div className="col-lg-6">
                        <img className="d-flex mx-auto" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/jofran/imagm-jofran-chave-imoveis.png?t=2024-03-28T15%3A44%3A26.501Z" alt="" width="640" />
                    </div>
                </div>

            </section>

        </>
    )
}