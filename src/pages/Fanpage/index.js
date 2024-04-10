import './fanpage.css'
export default function Fanpage() {
    return (
        <>

            <div id='fanpage' className="bg-max">
                <div className='header'>
                    <img className='logo d-flex mx-auto' src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/logos/LOGO%203D.png?t=2024-03-30T19%3A50%3A10.273Z" />

                </div>
                <img className="banner mt-0" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/jofran/foto-jofran-1200x628.jpg?t=2024-04-04T13%3A17%3A39.467Z" />
                <div className='faixa'>
                    <h2>O IMÓVEL DO SEUS SONHOS <span>ESTÁ AQUI!</span> </h2>
                </div>
                <div className='body'>

                    <div class=" w-100 text-center">
                        <div class="col">
                            <div class="flex-column ">
                                <a className='btn btn-fanpage' href="https://www.jofranimoveis.com.br/imoveis/a-venda">Encontre uma casa no site</a>
                                <a className='btn btn-fanpage' href="https://docs.google.com/forms/d/e/1FAIpQLSd4ATSVEo-oZzRujZvJDqpHMxH2LKrC0aHcW_xfMNmv4NNOPg/viewform">Loteamento Cidade inteligente</a>
                                <a className='btn btn-fanpage' href="https://lp.jofranimoveis.com.br">Saber mais</a>
                                <a className='btn btn-fanpage' href="https://api.whatsapp.com/send?phone=5561996102277&text=Gostaria%20de%20simular%20um%20financiamento%20de%20uma%20casa"><i className="bi bi-whatsapp me-1"></i> Falar com consultor</a>
                            </div>
                        </div>

                    </div>

                </div>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-5 border-top ">
                <div className="col-md-12 d-flex align-items-center">
                    <span className=" mb-2 text-light">© 2023 Jofran Imóveis -Todos os direitos reservados</span>
                </div>
            </footer>

            </div >
           

        </>
    )
}