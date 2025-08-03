import React from 'react';
import { AiTwotoneSafetyCertificate } from 'react-icons/ai';
import { Link } from 'react-router';

const OrderSummary = ({ cartItems }) => {

    const subtotal = cartItems?.reduce((acc, item) => acc + item?.quantity * item?.price, 0);

    const shipping = 20;
    const grandTotal =( subtotal + shipping).toFixed(2);

    return (
        <div className='max-w-[350px] w-full min-h-[350px] h-full border-t-[5px] rounded-3xl border-[#683292] bg-white shadow'>
            <h3 className='text-xl text-[#0f0200] font-archivo font-bold capitalize text-center'>order summary</h3>
            <div className='py-4 px-4 border-b border-t border-r-0 border-l-0 border-[#e3e4e5]'>
                <h4 className='text-base text-[#0f0200] font-archivo font-bold capitalize flex items-center justify-between'>apply coupons <button className='px-4 py-2 rounded-3xl bg-[#683292] text-white text-sm font-archivo font-bold capitalize cursor-pointer'>apply</button> </h4>
            </div>

            <div className='flex flex-col px-4 py-4 space-y-4'>
                <div className='border-b border-[#e3e4e5] pb-4 space-y-3'>

                    <h4 className='text-lg text-[#0f0200] font-archivo font-bold capitalize'>product details:</h4>
                    <p className='text-base text-[#787878] font-medium font-archivo capitalize flex items-center justify-between'>sub total <span className='text-[#0f0200] font-bold'>${subtotal}</span></p>
                    
                    <p className='text-base text-[#787878] font-medium font-archivo capitalize flex items-center justify-between'>shipping <span className='text-[#0f0200] font-bold'>${shipping}</span></p>
                </div>

                <div className='border-b border-[#e3e4e5] pb-4 space-y-3'>
                    <h4 className='text-base text-[#0f0200] font-archivo font-bold capitalize'>grand total <span className='text-[#f83d8e]'>${grandTotal}</span></h4>
                    <Link to={'/cart/checkout'} className='py-3 bg-[#f83d8e] rounded-3xl text-base text-white font-archivo font-bold capitalize flex items-center justify-center'>proceed checkout</Link>
                </div>

                <div>
                    <p className='text-sm text-[#787878] font-archivo font-medium capitalize flex items-center gap-1.5'><AiTwotoneSafetyCertificate size={'2rem'}  /> sage and secure payments, easy return, 100% authentic products</p>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;