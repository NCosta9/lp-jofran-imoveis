
import team1 from '../../Img/equipe.jpeg'
import './styleTeam.css'

export default function Team() {
    return (
        <>
            {/* <section id="team" class="team">
                <div class="container" data-aos="fade-up">

                    <div class="team-member">
                        <div class="member-img ">
                            <img src={team1} class="img-fluid" alt="" />
                        </div>
                        <div class="member-info">
                            <div class="social">
                                <a href="https://www.facebook.com/jofranimoveis"><i class="bi bi-facebook"></i></a>
                                <a href="https://www.instagram.com/jofranimoveis/"><i class="bi bi-instagram"></i></a>
                            </div>
                            <h4>Nosso Poderoso Time de Corretores estão prontos para lhe atender!</h4>
                        </div>
                    </div>
                </div>
            </section> */}

            <div class="section-title p-5">
                <h2 >Temos um poderoso time de corretores prontos para lhe atender!</h2>
                <span className="linha"></span>
            </div>

            <section id="team" class="d-flex mx-auto">
            <img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/equipe.jpeg"/>

            </section>



        </>
    )
}