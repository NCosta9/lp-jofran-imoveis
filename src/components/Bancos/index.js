import './styleBancos.css'
export default function Bancos() {
    return (
        <>
            <div id="bancos" className=" p-5 text-center rounded-3" data-aos="fade" data-aos-duration="1000">
                <h2 className="">Financiamento Facilitado</h2>
                <p className="lead">
                  Nosso financiamento é facilitado através do programa "Minhas casa, Minha Vida", aumentando ainda mais suas chances de conquistar sua casa própria.
                </p>
                    <div class="mx-auto">
                        <div class="justify-content-sm-center">
                            <section class="galeria">
                                <img class="img-icon" src='https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/bancos/casaminhavida.png?t=2024-02-14T13%3A28%3A59.135Z' />
                                <img class="img-icon" src='https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/bancos/caixa.jpg' />
                            </section>
                        </div>
                        
                    </div>
            </div>
        </>
    )
}