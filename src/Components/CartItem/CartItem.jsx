import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { RiCloseLargeLine } from "react-icons/ri";

const CartItem = ({ cartItem, onIncrease, onDecrease, onRemoveItem }) => {


    const total = (Number(cartItem?.quantity) * Number(cartItem?.price)).toFixed(2);

    return (
        <div className='flex items-center justify-between gap-8'>
            {/* product details wrapper  */}
            <div className='flex items-center gap-4 max-w-[300px] w-full'>
                <div className='w-[93px] h-[93px] rounded-xl flex items-center justify-center bg-[#f7f2f7]'>
                    <img className='w-[60px] h-[60px] object-cover' src={cartItem?.image} alt={cartItem?.name} />
                </div>
                <div className='space-y-2.5'>
                    <h4 className='text-lg text-[#0f0200] font-archivo font-bold capitalize'>{cartItem?.name}</h4>
                    <p className='text-base text-[#0f0200] font-archivo font-bold capitalize'><span color='text-[#787878]'>color:</span> {cartItem?.color}</p>
                    <p className='text-base text-[#0f0200] font-archivo font-bold capitalize'><span color='text-[#787878]'>size:</span> {cartItem?.size}</p>
                </div>
            </div>


            {/* product price wrapper  */}
            <p className='text-center text-lg text-[#f83d8e] font-archivo font-bold capitalize'>{cartItem?.price}$</p>


            {/* product quantity wrapper  */}
            <div className="flex items-center justify-between max-w-[180px] w-full h-[53px] border border-[#e3e4e5] rounded-3xl px-6">

                {/* decrease quantity  */}
                <button onClick={onDecrease} className='bg-none cursor-pointer border-r-2 pr-2 border-[#e3e4e5] h-full'><FaMinus size={'1rem'} color='black' /></button>

                <span className='text-2xl text-black'>{cartItem?.quantity}</span>

                {/* increase quantity  */}
                <button onClick={onIncrease} className='bg-none cursor-pointer border-l-2 pl-2 border-[#e3e4e5] h-full'><FaPlus size={'1rem'} color='black' /></button>
            </div>


            {/* product total wrapper  */}
            <div className='flex items-center gap-12'>
                <p className='text-lg text-[#0f0200] font-archivo font-bold capitalize'>{total}</p>
                <button onClick={onRemoveItem} className='cursor-pointer w-[40px] h-[40px] bg-none border border-[#ff6565] rounded-full flex items-center justify-center'><RiCloseLargeLine color='#ff6565' size={'1.25rem'} /></button>
            </div>


        </div>
    );
};

export default CartItem;