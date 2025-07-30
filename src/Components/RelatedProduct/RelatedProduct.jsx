import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdArrowRightAlt } from 'react-icons/md';
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router';

const RelatedProduct = ({ card }) => {
    return (
        <div className='flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg'>
            <div className={`w-full max-h-[244px] h-full bg-[#${card?.bg}] flex items-center justify-center p-4`}>
                <img className={`max-w-[174px] w-full max-h-[174px] h-full object-cover rounded-xl`} src={card?.image} alt={card?.title} />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <div className='flex items-center justify-between gap-8'>

                    <h4 className='text-xl text-[#0f0200] font-archivo font-semibold capitalize'>{card?.title}</h4>

                    <p className="flex items-center gap-2 text-[#0f0200] text-lg font-archivo">
                        {
                            Array.from({ length: card?.rating }, (_, index) => (
                                <span key={index} className="text-[#fbab2a]"><FaStar /></span>
                            ))
                        }
                        ({card?.rating})
                    </p>
                </div>

                <p className='text-xl text-[#787878] font-archivo font-normal'>{card?.description.slice(0, 60)}</p>

                <div className='w-full flex items-center justify-between gap-8'>
                    <p className='text-[22px] text-[#f83d8e] font-archivo font-bold capitalize'>{card?.price}</p>

                    <Link to={'/cart'} className=' w-[46px] h-[46px] bg-[#683292] rounded-full flex items-center justify-center gap-2 cursor-pointer'><BsCart2 color='white' size={'1.5rem'} /> </Link>
                </div>
            </div>
        </div>
    );
};

export default RelatedProduct;