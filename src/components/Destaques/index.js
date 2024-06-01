import "./destaques.css"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';




// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


export default function Destaques() {
    return (
        <>
            <div className="container col-md-9 col-sm-12">
                <div class="section-title ">
                    <h2 >Imóveis em Destaque</h2>
                    <span className="linha"></span>
                </div>
                <div id="destaques" className=" d-flex mx-0 row row-cols-1 row-cols-md-3 mb-3">

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}

                        breakpoints={{

                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        loop={true}

                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className=""
                    >
                        {[
                            {
                                cod: "CA0101",
                                capa: "https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9ftWwjXgr7v5Znen3XVcMHllDVRJJeIbi3YwVYEtux5d8M9EwEwbuc4LVb3u5ynX+sCOxP6e9G2p1rqIronAkM7nUPz96qxv3J7DT17yrpNrH8B-L3hpIrZBSVnUcL6FGHRsvx2JmELKfZJATk9N9AITmidV7gafeZ+HpmlgwnCmKsHCpA2Ba7n8HwFfDrMNAdIz7EIJ8RC9W0J8p0oF7J6yoS7TO7S-K5+hxzlXFx5k9oa+Squ619jCLJU4Vr0lNm4L5VMZWe0S2-TJT-8+5wEDqv3JFhXchgzWgPAoc9j0QdtAnaoBiAyWHLIbvBe6lILHg6f6ORuBMFo78Omd-vG3aKv0H6H5OUSDp7ZGpM3yAOxpBKTjXzZhfUNFARYypVWm6trzlW6sMGrIukILHRPRztwnpXZ9YEsD8cMDpz2gj8rx.jpg",
                                tipo: "Casa",
                                description: "Alto padrão!Cozinha americana,Sala com pé direito duplo",
                                localization: "Centro - Santo Antônio do Descoberto/GO",
                                metragem: "120",
                                quartos: "3",
                                banheiros: "2",
                                valor: "Sob Consulta",

                            },
                            {
                                cod: "CA0106",
                                capa: "https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9ftWwjXgr7v5Znen3XVcMHllDVRJJeIbi3YwVYEtu2Bd59RZww4GiNs-YYiJpy+sgKie5MiHiV6NxszRku+ExMLzTezixq0iwfWiF1S3soRefNYpHVlIac11fR63A4eyO2RjqQWRo0n9VORhT11shBM-sBgK4H6+RLGXq3I1-hOMWurpu3O3Roe2GWtwNLMNAdIz7EIJ8RC9W0J8p0oF7Jq1qTLdaOenJpi9yWxNWAZ8vJq+TqjzwtiOK59nSeUyO3cb51URUaJf1-aKA+9jrwcLou-TCwSW3hrDkec3f8vtBcFNlKIKlRDATrVOv0iyx9bBhKKuORvQNFA0873O+vSyOqqnHq75LCWAr74ss8+IBeV9F6uISDQVdllCEhM3yl6x6KvomnfFJ2jKphwVFFbfwI44uSdleApC-81OuG+4gc68Nw==.jpg",
                                tipo: "casa",
                                description: "Casa Nova, 5 Anos De Garantia, Até 100% Financiado E Aceita Financiamento.",
                                localization: "Mansões Bittencourt - Santo Antônio do Descoberto/GO",
                                metragem: "65",
                                quartos: "2",
                                banheiros: "1",
                                valor: "Sob Consulta",

                            },
                            {
                                cod: "CA0018",
                                capa: "https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9ftWwjXgr7v5Znen3XVcMHllDVRJJeIbi3YwVYEtuwJ61+tOox0RyvQwU+blmAuOjoOt5o67ohiM2rTPru-10uXPcoLz45Fn3KzwHnCpqJxAYeYEP2d4OPlcGRewWoeNEyFUgyXR-V-iapBWbnpV9DoSvRp583ySUJ+t71Q72jqAUPaAsDHcbv72AWcEKLMNAdIz7EIJ8RC9W0J8p0oF7Jq1qTLdaOenJpi9yWxNWAZ8vJq+TqjzwtiOK59nSeUyO3cb51URUaJf1-aKA+9jrwcLou-TCwSW3hrDkec3f8vtBcFNlKIKlRDATrVOv0iyx9bBhKKuORvQNFA0873O+vSyOqqnHq75LCWAr74ss8+IBeV9F6uISDQVdllCEhM3yl6x6KvomnfFJ2jKphwVFFbfwI44uSdleApC-81OuG+4gc68Nw==.jpg",
                                tipo: "Casa",
                                description: "Casa Nova, 5 Anos De Garantia, Até 100% Financiado E Aceita Financiamento.",
                                localization: "Mansões Bittencourt - Santo Antônio do Descoberto/GO",
                                metragem: "90",
                                quartos: "3",
                                banheiros: "1",
                                valor: "Sob Consulta",

                            },
                            {
                                cod: "CA0067",
                                capa: "https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9ftWwjXgr7v5Znen3XVcMHllDVRJJeIbi3YwVYEtu1Zc-P5vwwklne8VTZPusmy+9IyawPOGo0uSwo-Zu5P4yfmvR9jv6bs1+-HpEnmqqYRJT9MWMk1WS8J2VT-7AYGBYk9-pT+KmkDMRedoZkFHxiFolkxM3kvlVJ-8xXoZ5QWOU9ff+zWvcZm4O0Z4ENRHR9o47l9MqBG1U1ByqR9Q9JG2ozrBZrT0PpW61WIYQklkpNCiTqzwi82OZ5htFvpqLHoC91cXWaoQmvqIQKNz8k8NqufBERmHlELVhPYgYMf+HIVXmasCng3cGOdJ6kvtz4WVgqWrbRvQZVQ+-L6aqfC3P-imTa-2LDDhrLYk2diKf+B0A7iHIyMXAlJYFQAyzzG6-6mZgXjcTn-IpABLCl+azoBqpjs0YBIDvsNA9XDqmcC4ek0=.jpg",
                                tipo: "Casa",
                                description: "Aceita Financiamento Minha casa Minha vida, subsídio até 55 mil",
                                localization: " Centro - Santo Antônio do Descoberto/GO",
                                metragem: "110",
                                quartos: "3",
                                banheiros: "1",
                                valor: "Sob Consulta",

                            },
                            {
                                cod: "SO0002",
                                capa: "https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9ftWwjXgr7v5Znen3XVcMHllDVRJJeIbi3YwVYEtu3pJ9N1L-BMji9Iue+OV7TOW-aGFy4qAs2W8qJLPnZP1+cLDfsng7II786DtA1yI7J9GQ9M4KxB7deQjSBPqVoueZl54-2m+rXTgUuMYf3hn70QFkg5f7UewWJ3w6UEM4S26Ce+Ihy2jU6vdDl5+CrMNAdIz7EIJ8RC9W0J8p0oF7Jq1qTLdaOenJpi9yWxNWAZ8vJq+TqjzwtiOK59nSeUyO3cb51URUaJf1-aKA+9jrwcLou-TCwSW3hrDkec3f8vtBcFNlKIKlRDATrVOv0iyx9bBhKKuORvQNFA0873O+vSyOqqnHq75LCWAr74ss8+IBeV9F6uISDQVdllCEhM3yl6x6KvomnfFJ2jKphwVFFbfwI44uSdleApC-81OuG+4gc68Nw==.jpg",
                                tipo: "Sobrado",
                                description: "Alto padrão de acabamento, com parcelas à partir de R$ 1,600",
                                localization: "Centro - Santo Antônio do Descoberto/GO",
                                metragem: "70",
                                quartos: "3",
                                banheiros: "2",
                                valor: "320.000",

                            },


                        ].map((props) => (

                            <SwiperSlide>
                                <div className="card-box-a card-shadow rounded-3  ">
                                    <div className="img-box-a ">
                                        <img src={props.capa} alt="" className="img-a img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-overlay-a-content">
                                            <div className="card-header-a">
                                                <h2 className="card-title-a text-start">
                                                    <a href="property-single.html">
                                                        <br /> {props.localization}
                                                    </a>
                                                </h2>
                                            </div>
                                            <div className="card-body-a">
                                                <div className="price-box d-flex">
                                                    <span className="price-a py-3">{props.tipo} | {props.valor}</span>
                                                </div>
                                                <a href="#" className="text-warning">Saiba mais
                                                    <span className="bi bi-chevron-right"></span>
                                                </a>
                                            </div>
                                            <div className="card-footer-a">
                                                <ul className="card-info d-flex justify-content-around text-center">
                                                    <li className="text-light">
                                                        <h4 className="card-info-title">Área</h4>
                                                        <h6>{props.metragem}m
                                                            <sup>2</sup>
                                                        </h6>
                                                    </li>
                                                    <li className="text-light">
                                                        <h4 className="card-info-title">Quarto</h4>
                                                        <h6>{props.quartos}</h6>
                                                    </li>
                                                    <li className="text-light">
                                                        <h4 className="card-info-title">Banheiro</h4>
                                                        <h6>{props.banheiros}</h6>
                                                    </li>
                                                    <li className="text-light">
                                                        <h4 className="card-info-title">Garagem</h4>
                                                        <h6>1</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <a href="https://imobiliaria.jofranimoveis.com.br/forms-lp" class="">

                                        <div className="card" >
                                            <span class="position-absolute top-0 z-3  badge ms-3 ">
                                                {props.cod}
                                            </span>
                                            <div className="img-card">
                                            <img src={props.capa} class="card-img-top" alt="..." />

                                            </div>

                                            <div class="card-body">
                                                <div class="d-flex justify-content-start ">
                                                    <span class="badge text-bg-info rounded-pill p-2">{props.cod}</span>
                                                    <span class="badge text-bg-warning rounded-pill p-2">{props.tipo}</span>

                                                </div>
                                                <p class="description card-text mt-2 fw-bold">{props.description}</p>
                                                <p className="text-start address">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#d09d2c" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6a3 3 0 0 1 0 6" /></svg>
                                                    <span>{props.localization}</span>
                                                </p>
                                                <ul class="d-flex flex-wrap text-start">
                                                    <li>
                                                        <i class="fa-bed"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#d09d2c" d="M20 10V5H4v5H2v7h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-7zm-9 0H6V7h5zm7 0h-5V7h5z" /></svg></i>
                                                        <span>{props.quartos} quartos</span>
                                                    </li>
                                                    <li>
                                                        <i class="fa-bath"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#d09d2c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#d09d2c" d="M21 13v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2.4a.6.6 0 0 1 .6-.6z" /><path d="m16 20l1 2m-9-2l-1 2m14-9V7a4 4 0 0 0-4-4h-5" /><path fill="#d09d2c" d="M15.4 8H8.6c-.331 0-.596-.268-.56-.598C8.186 6.075 8.863 3 12 3s3.814 3.075 3.96 4.402c.036.33-.229.598-.56.598" /></g></svg></i>
                                                        <span>{props.banheiros} banheiros</span>
                                                    </li>
                                                    <li>
                                                        <i class=""><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#d09d2c" d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618a.73.73 0 0 1 .085.073l1.415 1.415a.75.75 0 1 1-1.061 1.06l-1.414-1.414a.751.751 0 0 1-.074-.086L11.03 5.739a.66.66 0 0 1 .086.074l2.121 2.121a.75.75 0 1 1-1.06 1.06l-2.122-2.12a.756.756 0 0 1-.074-.087L8.91 7.86c.03.022.058.047.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L7.933 8.996a.757.757 0 0 1-.074-.086L6.787 9.98c.03.022.06.047.086.074l2.122 2.122a.75.75 0 0 1-1.061 1.06l-2.121-2.121a.752.752 0 0 1-.074-.086l-1.073 1.073a.66.66 0 0 1 .086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L3.69 13.238a.756.756 0 0 1-.073-.085C2.539 14.24 2 14.862 2 15.616" /></svg></i>
                                                        <span>{props.metragem} m²</span>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div class="card-valor">
                                                <p className="valor text-end fw-bold">Valor {props.valor}</p>
                                            </div>
                                        </div>
                                    </a> */}
                            </SwiperSlide>
                        ))};
                    </Swiper>

                </div >
            </div>

        </>
    )
}