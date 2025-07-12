import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from '../Card/Card';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';



const Slider = ({ deviceView, sliderData }) => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const breakpoints = {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: deviceView || 3,
        },
    }

    return (
        <div className='w-full h-full'>
            <Swiper className='w-full h-full'
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={deviceView || 3}

                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}

                breakpoints={breakpoints}
            >

                {
                    sliderData?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card card={item} />
                        </SwiperSlide>
                    ))

                }

                {/* custom arrows  */}
                <button ref={prevRef} className='absolute top-1/2 z-10 transform translate-y-1/2 text-3xl text-white font-archivo font-semibold left-3 p-4 rounded-full bg-[#f83d8e] cursor-pointer'><FaLongArrowAltLeft/></button>
                <button ref={nextRef} className='absolute top-1/2 z-10 transform translate-y-1/2 text-3xl text-white font-archivo font-semibold right-3 p-4 rounded-full bg-[#f83d8e]  cursor-pointer'><FaLongArrowAltRight/></button>

            </Swiper>
        </div>
    );
};

export default Slider;