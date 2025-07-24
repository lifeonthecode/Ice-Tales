import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdArrowRightAlt } from 'react-icons/md';
import { Link } from 'react-router';

const ProductCard = ({ card, gridColumn }) => {
    return (
        <div className='flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg'>
            <div className='w-full h-auto'>
                <img className={`w-full min-h-[289px] h-full object-cover`} src={card?.image} alt={card?.title} />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <h4 className='text-xl text-[#0f0200] font-archivo font-semibold capitalize'>{card?.title}</h4>
                <p className="flex items-center gap-2 text-[#0f0200] text-lg font-archivo">
                    {
                        Array.from({ length: card?.rating }, (_, index) => (
                            <span key={index} className="text-[#fbab2a]"><FaStar /></span>
                        ))
                    }
                    ({card?.rating})
                </p>

                <p className='text-[22px] text-[#683292] font-archivo font-bold capitalize'>{card?.price}</p>

                {
                    gridColumn === 'grid-cols-1' && <p className='text-xl text-[#787878] font-archivo font-normal'>{card?.description}</p>
                }
                {
                    gridColumn === 'grid-cols-1' && <span className='text-xl text-[#0f0200] font-archivo font-semibold capitalize'>stock: {card?.stock}</span>
                }

                <Link to={'/cart'} className='max-w-[200px] w-full h-[44px] bg-[#f83d8e] rounded-2xl flex items-center justify-center text-lg text-white font-archivo font-bold capitalize gap-2'>add to cart <MdArrowRightAlt size={'1.5rem'} /> </Link>
            </div>
        </div>
    );
};

export default ProductCard;