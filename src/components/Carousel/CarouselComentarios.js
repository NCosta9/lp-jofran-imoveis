import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';



import './styles.css';

// import required modules
import { Pagination, Navigation,Autoplay} from 'swiper/modules';

export default function CarouselComentarios() {
    
    return (
        <>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                loop={true}
               
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                modules={[Pagination, Navigation,Autoplay]}
                className="mySwiper"
            >

                {[
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/prova-social/depoimento-1.jpeg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/prova-social/depoimento-2.jpeg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/prova-social/depoimento-3.jpeg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/prova-social/depoimento-4.jpeg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/prova-social/depoimento-5.jpeg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/prova-social/depoimento-6.jpeg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/prova-social/depoimento-7.jpeg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/prova-social/depoimento-8.jpeg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/prova-social/depoimento-9.jpeg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/prova-social/depoimento-10.jpeg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/prova-social/depoimento-11.jpeg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/prova-social/depoimento-12.jpeg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/prova-social/depoimento-13.jpeg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/prova-social/depoimento-14.jpeg',
                   

               
                ].map((image)=>(
                    <SwiperSlide>
                        <img className='w-100 comentarios'
                        src={image.toLowerCase()}/>
                    </SwiperSlide>
                )
                    
                )}
            </Swiper>
        </>
    )
}