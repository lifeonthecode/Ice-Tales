import React from 'react';
import { Link } from 'react-router';
import { MdArrowRightAlt } from "react-icons/md";

const Banner = () => {
    return (
        <div className='w-full min-h-[646px] h-full bg-[url("/banner_bg.jpg")] bg-cover bg-center bg-no-repeat flex items-center justify-center'>
            <div className="lg:container mx-auto">
                <div className="md:flex items-center justify-between gap-8 space-y-8 md:space-y-0 w-full">

                    {/* left wrapper  */}
                    <div className='max-w-[744px] w-full space-y-6'>
                        <h3 className='text-8xl text-white font-berkshire-heading font-normal capitalize'>vegan ice <br /> cream delights</h3>
                        <p className='text-[22px] text-white font-archivo font-normal'>Discover a world of tasty vegan ice cream flavors and desserts that everyone can enjoy</p>
                        <Link className='max-w-[320px] w-full h-[62px] rounded-4xl bg-[#f83d8e] flex items-center justify-center gap-3 text-xl text-white font-archivo font-semibold capitalize'>explore our vegan flavors <MdArrowRightAlt size={'1.5rem'} color={'white'} /></Link>
                    </div>

                    {/* right wrapper  */}
                    <div className='relative max-w-[760px] w-full'>
                        <img className='min-w-[760px] w-full h-auto object-cover' src="/banner_image.png" alt="banner image" />
                        <div className='absolute top-0 left-10 w-[138px] h-[138px] bg-[#fbab2a] rounded-full flex items-center justify-center'>
                            <h4 className='text-5xl text-white font-archivo font-semibold capitalize flex flex-col items-center justify-center gap-1'>20% <span className='text-3xl uppercase'>off</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;