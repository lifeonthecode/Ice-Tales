import { CardCvcElement, CardExpiryElement, CardNumberElement } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';
import { Link } from 'react-router';

const CheckoutForm = () => {


    const [paymentMethod, setPaymentMethod] = useState('card');

    return (
        <div className='w-full h-auto'>
            <form className='space-y-6'>
                <div>
                    <h3 className='text-xl text-[#0f0200] font-archivo font-bold capitalize'>billing address</h3>
                </div>


                {/* first name and last name wrapper  */}
                <div className="flex items-center gap-8 justify-between">
                    {/* first name wrapper  */}
                    <div className='flex flex-col gap-2.5 max-w-[500px] w-full'>
                        <label className='text-base text-[#646464] font-archivo font-medium capitalize' htmlFor="first_name">
                            first name
                        </label>
                        <input className='max-w-[500px] w-full h-[51px] rounded-3xl border border-[#e3e4e5] font-base text-[#646464] font-archivo font-medium' id='first_name' type="text" />
                    </div>
                    {/* last name wrapper  */}
                    <div className='flex flex-col gap-2.5 max-w-[500px] w-full'>
                        <label className='text-base text-[#646464] font-archivo font-medium capitalize' htmlFor="last_name">
                            last name
                        </label>
                        <input className='max-w-[500px] w-full h-[51px] rounded-3xl border border-[#e3e4e5] font-base text-[#646464] font-archivo font-medium' id='last_name' type="text" />
                    </div>
                </div>


                {/* email address and state name wrapper  */}
                <div className="flex items-center gap-8 justify-between">
                    {/* email address wrapper  */}
                    <div className='flex flex-col gap-2.5 max-w-[500px] w-full'>
                        <label className='text-base text-[#646464] font-archivo font-medium capitalize' htmlFor="email">
                            email address
                        </label>
                        <input className='max-w-[500px] w-full h-[51px] rounded-3xl border border-[#e3e4e5] font-base text-[#646464] font-archivo font-medium' id='email' type="email" />
                    </div>
                    {/* state wrapper  */}
                    <div className='flex flex-col gap-2.5 max-w-[500px] w-full'>
                        <label className='text-base text-[#646464] font-archivo font-medium capitalize' htmlFor="state">
                            state
                        </label>
                        <input className='max-w-[500px] w-full h-[51px] rounded-3xl border border-[#e3e4e5] font-base text-[#646464] font-archivo font-medium' id='state' type="text" />
                    </div>
                </div>


                {/* city and zip/ postal code wrapper  */}
                <div className="flex items-center gap-8 justify-between">
                    {/* city wrapper  */}
                    <div className='flex flex-col gap-2.5 max-w-[500px] w-full'>
                        <label className='text-base text-[#646464] font-archivo font-medium capitalize' htmlFor="city">
                            city
                        </label>
                        <input className='max-w-[500px] w-full h-[51px] rounded-3xl border border-[#e3e4e5] font-base text-[#646464] font-archivo font-medium' id='city' type="text" />
                    </div>
                    {/* postal code wrapper  */}
                    <div className='flex flex-col gap-2.5 max-w-[500px] w-full'>
                        <label className='text-base text-[#646464] font-archivo font-medium capitalize' htmlFor="postal_code">
                            zip/ postal code
                        </label>
                        <input className='max-w-[500px] w-full h-[51px] rounded-3xl border border-[#e3e4e5] font-base text-[#646464] font-archivo font-medium' id='postal_code' type="text" />
                    </div>
                </div>

                <div>
                    <h4 className='text-xl text-[#0f0200] font-archivo font-bold capitalize'>payment method:</h4>


                </div>

                <div onClick={() => setPaymentMethod('card')} className="w-full flex items-center justify-between gap-8 h-[51px] border-[#e3e4e5] border rounded-3xl px-3">
                    <div className='flex items-center gap-3 '>
                        <input
                            id='credit'
                            type="radio"
                            className='w-[25px] h-[25px] accent-pink-500 cursor-pointer'
                            checked={paymentMethod === 'card'}
                        />

                        <label htmlFor='credit' className='text-base text-[#0f0200] font-medium font-archivo capitalize cursor-pointer'>credit card</label>
                    </div>
                    <div className='flex items-center gap-2.5'>
                        <button><FaCcVisa size={'1.8rem'} /></button>
                        <button><FaCcMastercard size={'1.8rem'} /></button>
                        <button><SiAmericanexpress size={'1.8rem'} /></button>
                    </div>
                </div>

                {
                    paymentMethod === 'card' &&
                    <div className='w-full space-y-6'>
                        <div className='flex flex-col gap-2.5'>
                            <label className='text-base text-[#646464] font-medium font-archivo capitalize cursor-pointer' htmlFor="card_number">card number</label>
                            <CardNumberElement className='w-full border-[#e3e4e5] border rounded-4xl px-3 py-4' id='card_number' options={{ placeholder: 'Card Number' }} />
                        </div>

                        <div className='space-y-6'>

                            <h4 className='text-xl text-[#0f0200] font-archivo font-bold capitalize'>expiration date</h4>
                            <div className='flex items-center justify-between gap-8'>
                                <div className='max-w-[350px] w-full h-[51px]'>
                                    <CardExpiryElement className='max-w-[350px] h-[51px] w-full px-3 py-4 rounded-4xl border border-[#e3e4e5]' options={{ placeholder: 'Expiry Date' }} />
                                </div>
                                <div className='max-w-[350px] w-full h-[51px]'>
                                    <CardCvcElement className='max-w-[350px] w-full px-3 py-4 h-[51px] rounded-4xl border border-[#e3e4e5]' options={{ placeholder: 'CVC' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                }



                <div onClick={() => setPaymentMethod('cod')}  className="w-full flex items-center justify-between gap-8 h-[51px] border-[#e3e4e5] border rounded-3xl px-3">
                    <div className='flex items-center gap-3 '>
                        <input
                            id='credit'
                            type="radio"
                            className='w-[25px] h-[25px] accent-pink-500 cursor-pointer'
                            checked={paymentMethod === 'cod'}
                        />


                        <label htmlFor='credit' className='text-base text-[#0f0200] font-medium font-archivo capitalize cursor-pointer'>Cash on delivery</label>
                    </div>
                </div>

                <div className='w-full flex items-center justify-center'>
                    <p className='text-sm text-[#646464] font-archivo font-medium '>By click the button, <Link to={'/terms_&_conditions'} className='text-[#f83d8e] capitalize'>terms and conditions</Link></p>
                </div>

                <button className='w-full h-[51px] bg-[#f83d8e] rounded-4xl flex items-center justify-center text-xl text-white font-archivo capitalize font-semibold cursor-pointer'>place order now </button>
            </form>
        </div>
    );
};

export default CheckoutForm;