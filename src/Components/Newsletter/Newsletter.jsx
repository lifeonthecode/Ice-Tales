import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const Newsletter = () => {
    return (
        <div className='flex items-center justify-center w-full bg-white py-[130px]'>
            <div className="lg:container mx-auto">
                <div className="max-w-[1140px] w-full mx-auto">

                    <div className="flex items-center justify-center gap-6 flex-col mb-16">
                        <h3 className='text-5xl text-[#0f0200] font-berkshire-heading font-normal capitalize'>sign up for <span className='text-[#f83d8e]'>exclusive deals</span>  and updates</h3>
                        <p className='text-xl text-[#646464] font-archivo font-normal'>Get 10% off you next order and stay updated with our latest offers.</p>
                    </div>


                    <div className='w-full '>
                        <form action="" className='w-full flex items-center justify-center gap-4'>
                            <input type="email" className='max-w-[520px] w-full h-[62px] rounded-3xl bg-white shadow outline-0 pl-4 text-[#0f0200] text-base font-berkshire-heading font-normal' placeholder='Enter Your Email Address' />
                            <button type='submit' className='max-w-[200px] w-full h-[62px] rounded-4xl bg-[#f83d8e] text-base text-white font-archivo font-medium capitalize cursor-pointer flex justify-center items-center gap-4'>Subscribe <GoArrowRight size={'1.5rem'} /> </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;