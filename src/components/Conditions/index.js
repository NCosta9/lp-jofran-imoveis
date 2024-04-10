import './styleConditions.css'
export default function Conditions() {
    return (
        <>
            <div  class="container col-xl-12 mt-5">
                <div id='conditions' class="row flex-lg-row-reverse align-items-center py-5 ">
                    <div class="col-10 col-sm-8 col-lg-6 order-2 order-lg-1 d-flex mx-auto"  data-aos="zoom-in" data-aos-duration="300">
                        <img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/a-casa-propria-voce-pode-amarela.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2">
                        <div class="section-title">
                            <h2 >Você pode conquistar hoje o sonho da casa própria!</h2>
                            <span className="linha"></span>
                            <p className='fs-5'> Se esses critérios abaixo encaixam em seu perfil, você pode conquistar hoje o sonho da sua casa própria.  </p>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 g-4">

                            <div class="icon  col d-flex flex-column gap-2  " >
                                <div className='text-center' data-aos="zoom-in" data-aos-duration="300">
                                    <div class="feature-icon-small d-inline-flex align-items-center justify-content-center  fs-4 rounded-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96" /><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M288 304c-87 0-175.3 48-191.64 138.6c-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304Z" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M88 176v112m56-56H32" /></svg>
                                    </div>
                                    <h4 class="fw-semibold mb-0 text-center fs-5">18 Anos ou Mais</h4>
                                </div>

                            </div>
                            <div class="icon  col d-flex flex-column gap-2" >
                                <div className='text-center' data-aos="zoom-in" data-aos-duration="600">
                                    <div class="feature-icon-small d-inline-flex fs-4 rounded-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 48 48"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M28.772 24.667A4.001 4.001 0 0 0 25 22v-1h-2v1a4 4 0 1 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4.001 4.001 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4a2 2 0 0 1 1.886 1.333a1 1 0 1 0 1.886-.666M23 24a2 2 0 1 0 0 4zm2 10a2 2 0 1 0 0-4z" /><path d="M13.153 8.621C15.607 7.42 19.633 6 24.039 6c4.314 0 8.234 1.361 10.675 2.546l.138.067c.736.364 1.33.708 1.748.987L32.906 15C41.422 23.706 48 41.997 24.039 41.997S6.479 24.038 15.069 15l-3.67-5.4c.283-.185.642-.4 1.07-.628c.212-.114.44-.231.684-.35m17.379 6.307l2.957-4.323c-2.75.198-6.022.844-9.172 1.756c-2.25.65-4.75.551-7.065.124a25.167 25.167 0 0 1-1.737-.386l1.92 2.827c4.115 1.465 8.981 1.465 13.097.002M16.28 16.63c4.815 1.86 10.602 1.86 15.417-.002a29.255 29.255 0 0 1 4.988 7.143c1.352 2.758 2.088 5.515 1.968 7.891c-.116 2.293-1.018 4.252-3.078 5.708c-2.147 1.517-5.758 2.627-11.537 2.627c-5.785 0-9.413-1.091-11.58-2.591c-2.075-1.437-2.986-3.37-3.115-5.632c-.135-2.35.585-5.093 1.932-7.87c1.285-2.648 3.078-5.197 5.005-7.274m-1.15-6.714c.8.238 1.636.445 2.484.602c2.15.396 4.306.454 6.146-.079a54.097 54.097 0 0 1 6.53-1.471C28.45 8.414 26.298 8 24.038 8c-3.445 0-6.658.961-8.908 1.916" /></g></svg>
                                    </div>
                                    <h4 class="fw-semibold mb-0 fs-5">Salário Mínimo ou Mais</h4>
                                </div>
                            </div>
                            <div class="icon  col d-flex flex-column gap-2" >
                                <div className='text-center' data-aos="zoom-in" data-aos-duration="800">
                                    <div class="feature-icon-small d-inline-flex align-items-center justify-content-center  fs-4 rounded-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="currentColor"><path d="M26 6a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-1h-6V8h6V7a1 1 0 0 1 1-1" /><path d="M16 6a1 1 0 0 0-1 1v1h-2a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h17a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3h-1v2h1a1 1 0 0 1 1 1v24a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h2v1a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1" /><path d="M14 19a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm-1 6a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1" /><path d="M13 40a5 5 0 0 1-5-5V10H6v25a7 7 0 0 0 7 7h17v-2z" /><path fill-rule="evenodd" d="M36 13a3 3 0 1 1 6 0v20.303l-3 4.5l-3-4.5zm3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1m0 22.197l1-1.5V17h-2v15.697z" clip-rule="evenodd" /></g></svg>
                                    </div>
                                    <h4 class="fw-semibold mb-0 fs-5">Renda Comprovada</h4>
                                </div>

                            </div>
                            <div class="icon  col d-flex flex-column gap-2" >
                                <div className='text-center' data-aos="zoom-in" data-aos-duration="1000">
                                    <div class="feature-icon-small d-inline-flex align-items-center justify-content-center  fs-4 rounded-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69" /></svg>
                                    </div>
                                    <h4 class="fw-semibold mb-0 fs-5">Sonho de ter a casa própia</h4>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


