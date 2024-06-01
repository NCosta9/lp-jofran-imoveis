import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Banner3() {

    return (
        <>
            <Swiper
                className='d-none d-lg-block' fade>
                    <SwiperSlide >
                        <img
                            className="w-100"
                            src='https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/banner/banner-lplp-desktop.png?t=2024-05-31T15%3A13%3A48.955Z'
                        />

                    </SwiperSlide>
                   
            </Swiper>
            <Swiper
                className='d-lg-none'>
               
                    <SwiperSlide interval={3000}>
                        <img
                            className="w-100"
                            src='https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/banner/banner-mobile-lp.png?t=2024-05-31T14%3A52%3A15.069Z'
                        />
                    </SwiperSlide>
                  
            </Swiper>

        </>

    );
}
