import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaFacebookF, FaInstagram, FaLongArrowAltLeft, FaLongArrowAltRight, FaStar, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';

const sliderData = [
    {
        name: 'marvin joner',
        image: '/team_members_1.jpg',
        position: 'Bakery worker',
    },
    {
        name: 'patricia woodrum',
        image: '/team_members_2.jpg',
        position: 'staff worker',
    },
    {
        name: 'hannaz stone',
        image: '/team_members_3.jpg',
        position: 'shop worker',
    },
    {
        name: 'marvin joner',
        image: '/team_members_1.jpg',
        position: 'Bakery worker',
    },
    {
        name: 'patricia woodrum',
        image: '/team_members_2.jpg',
        position: 'staff worker',
    },
    {
        name: 'hannaz stone',
        image: '/team_members_3.jpg',
        position: 'shop worker',
    },
]

const OurTeamMember = () => {

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
        <div className='w-full min-h-[913px] h-full bg-[url("/bg.png")] bg-cover bg-no-repeat bg-center flex items-center justify-center'>
            <div className="lg:container mx-auto">
                {/* section header  */}
                <div className="w-full flex flex-col items-center gap-4 mb-12">
                    <h3 className={`text-5xl text-[#0f0200] font-berkshire-heading font-normal capitalize`}>
                        our <span className='text-[#f83d8e]'>team</span> members
                    </h3>
                    <p className="text-xl text-[#646464] font-archivo font-normal">Get to know the friendly faces behind your favorite flavors.</p>
                </div>

                <Swiper className='w-full bg-none'
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}

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
                                <div className='w-full'>
                                    <div className="flex flex-col items-center gap-3">
                                        <img className='max-w-[314px] w-full max-h-[314px] h-full  rounded-full object-cover' src={item?.image} alt={item?.client} />
                                        <div className='flex flex-col items-center justify-center gap-2'>
                                            <h4 className='text-lg text-[#0f0200] font-archivo font-bold capitalize'>{item?.name}</h4>
                                            <span className='text-sm text-[#646464] font-archivo font-normal capitalize'>{item?.position}</span>
                                        </div>

                                        {/* social media icons */}
                                        <div className='flex items-center gap-4'>
                                            <Link className='w-[46px] h-[46px] rounded-full bg-[#f83d8e] flex items-center justify-center'><FaFacebookF size={'1.5rem'} color='white' /></Link>

                                            <Link className='w-[46px] h-[46px] rounded-full bg-[#f83d8e] flex items-center justify-center'><FaInstagram size={'1.5rem'} color='white' /></Link>

                                            <Link className='w-[46px] h-[46px] rounded-full bg-[#f83d8e] flex items-center justify-center'><FaYoutube size={'1.5rem'} color='white' /></Link>
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

export default OurTeamMember;