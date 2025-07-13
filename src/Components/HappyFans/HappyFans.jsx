import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaStar } from 'react-icons/fa';

const sliderData = [
    {
        description: 'Ruin your diet, not your taste buds! Our vegan ice creams are a guilt-free indulgence that will leave you craving for more.',
        image: '/happy_fans_1.jpg',
        rating: 4.5,
        client: 'peri james',
    },
    {
        description: 'Ruin your diet, not your taste buds! Our vegan ice creams are a guilt-free indulgence that will leave you craving for more.',
        image: '/happy_fans_2.jpg',
        rating: 5,
        client: 'naurth reough',
    },
    {
        description: 'Ruin your diet, not your taste buds! Our vegan ice creams are a guilt-free indulgence that will leave you craving for more.',
        image: '/happy_fans_3.jpg',
        rating: 3.5,
        client: 'kevin andrew',
    },
    {
        description: 'Ruin your diet, not your taste buds! Our vegan ice creams are a guilt-free indulgence that will leave you craving for more.',
        image: '/happy_fans_1.jpg',
        rating: 4.5,
        client: 'peri james',
    },
    {
        description: 'Ruin your diet, not your taste buds! Our vegan ice creams are a guilt-free indulgence that will leave you craving for more.',
        image: '/happy_fans_2.jpg',
        rating: 5,
        client: 'naurth reough',
    },
    {
        description: 'Ruin your diet, not your taste buds! Our vegan ice creams are a guilt-free indulgence that will leave you craving for more.',
        image: '/happy_fans_3.jpg',
        rating: 3.5,
        client: 'kevin andrew',
    },
]
const HappyFans = () => {


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
            slidesPerView: 3,
        },
    }

    return (
        <div className='w-full min-h-[600px] h-full bg-white'>
            <div className="lg:container mx-auto">
                <div className="flex items-center justify-center gap-6 flex-col mb-16">
                    <h3 className='text-5xl text-[#0f0200] font-berkshire-heading font-normal capitalize'>hear from our <span className='text-[#f83d8e]'>happy</span> fans</h3>
                    <p className='text-xl text-[#646464] font-archivo font-normal'>Read testimonials from those who have enjoyed our artisan gelato.</p>
                </div>

                <Swiper className='w-full bg-none'
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 3000 }}

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
                                <div className='w-full min-h-[343px] h-full flex flex-col justify-center items-center shadow-2xl border-b-2 border-b-[#f83d8e] gap-4 bg-white rounded-3xl p-6'>
                                    <p className='text-base text-[#646464] font-archivo font-normal'>{item?.description}</p>
                                    <div className="flex items-center gap-3">
                                        <img className='w-[54px] h-[54px] object-cover rounded-full' src={item?.image} alt={item?.client} />
                                        <div className=''>
                                            <div className="flex items-center">
                                                {
                                                    [...Array(Math.ceil(item?.rating))].map((_, i) => (
                                                        <span key={i} className="text-[#fbab2a]"><FaStar /></span>
                                                    ))
                                                }
                                            </div>
                                            <h4 className='text-lg text-[#f83d8e] font-archivo font-bold capitalize'>{item?.client}</h4>
                                            <span className='text-sm text-[#646464] font-archivo font-normal capitalize'>Happy client</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))

                    }

                    {/* custom arrows  */}
                    <button ref={prevRef} className='absolute top-1/2 z-10 transform translate-y-1/2 text-3xl text-white font-archivo font-semibold left-3 p-4 rounded-full bg-[#f83d8e] cursor-pointer'><FaLongArrowAltLeft /></button>
                    <button ref={nextRef} className='absolute top-1/2 z-10 transform translate-y-1/2 text-3xl text-white font-archivo font-semibold right-3 p-4 rounded-full bg-[#f83d8e]  cursor-pointer'><FaLongArrowAltRight /></button>

                </Swiper>
            </div>
        </div>
    );
};

export default HappyFans;