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
import { Pagination, Navigation,Autoplay } from 'swiper/modules';


export default function CarouselCasas() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Pagination, Navigation,Autoplay]}
                className="mySwiper"
            >

                {[
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/casas/casa-1.jpg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/casas/casa-2.jpg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/casas/casa-3.jpg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/casas/casa-4.jpg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/casas/casa-5.jpg',
                    'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/casas/casa-6.jpg',
                ].map((image)=>(
                    <SwiperSlide>
                        <img className='w-100'
                        src={image.toLowerCase()}/>
                    </SwiperSlide>
                )
                    
                )}
            </Swiper>
        </>
    )
}