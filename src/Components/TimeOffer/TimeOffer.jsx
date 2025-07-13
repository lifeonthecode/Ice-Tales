import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router';
const TimeOffer = () => {
    return (
        <div className='w-full min-h-[696px] h-full bg-[#f83d8e] flex items-center justify-center mb-[130px]'>
            <div className="lg:container mx-auto">
                <div className="flex items-center justify-center gap-6 flex-col">
                    <h3 className='text-6xl text-white font-berkshire-heading font-normal capitalize'>limited <br/> time offer!</h3>
                    <h4 className='text-3xl text-white font-archivo font-normal capitalize'>get <span className='text-[#ffd800]'>20% off</span> all vegan ice creams!</h4>
                    <Link className='max-w-[211px] w-full h-[62px] bg-[#683292] rounded-4xl flex items-center justify-center text-base text-white font-archivo font-medium gap-2 capitalize'>get this deal <GoArrowRight size={'1.5rem'} /></Link>
                    <p className='text-base text-white font-archivo font-normal'>Use code VEGAN20 all checkout</p>
                </div>
            </div>
        </div>
    );
};

export default TimeOffer;