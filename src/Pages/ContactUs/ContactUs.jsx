import React from 'react';
import Broadcom from '../../Components/Broadcom/Broadcom';
import { TfiWorld } from 'react-icons/tfi';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { MdAttachEmail } from 'react-icons/md';
import { GoArrowRight } from 'react-icons/go';

const ContactUs = () => {
    return (
        <div className='w-full pb-[130px]'>

            <div>
                <Broadcom page={'contact us'} />
            </div>

            <div className="w-full pt-[130px]">
                <div className="lg:container mx-auto">

                    {/* contact header wrapper  */}
                    <div className="flex items-center justify-center gap-6 flex-col mb-16">
                        <h3 className='text-5xl text-[#0f0200] font-berkshire-heading font-normal capitalize'>Get in <span className='text-[#f83d8e]'>touch</span>  with us</h3>
                        <p className='text-xl text-[#646464] font-archivo font-normal'>Reach out and connect with us today for any inquiries or assistance!.</p>
                    </div>

                    {/* contact form wrapper  */}
                    <div className="flex items-center justify-between gap-10">
                        {/* contact form left side wrapper  */}
                        <div className='flex flex-col gap-6'>
                            <div className="flex items-center gap-6 px-4 py-6 bg-white shadow max-w-[450px] w-full rounded-lg">
                                <div className='bg-[#683292] w-[70px] h-[70px] rounded-full flex items-center justify-center text-white text-2xl'>
                                    <span><TfiWorld /></span>
                                </div>
                                <div className='flex flex-col gap-2.5'>
                                    <h4 className='text-xl text-[#0f0200] font-archivo font-semibold capitalize'>our location</h4>
                                    <p className='text-base text-[#646464] font-archivo font-normal capitalize max-w-[150px]'>123 king Street, Melbourne victoria 3000 Australia</p>
                                </div>

                            </div>

                            <div className="flex items-center gap-6 px-6 py-6 bg-white shadow max-w-[450px] w-full rounded-lg">
                                <div className='bg-[#683292] w-[70px] h-[70px] rounded-full flex items-center justify-center text-white text-2xl'>
                                    <span><BsTelephoneOutbound /></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h4 className='text-xl text-[#0f0200] font-archivo font-semibold capitalize'>Phone Number</h4>
                                    <p className='text-base text-[#646464] font-archivo font-normal capitalize'>(+615842471145)</p>
                                    <p className='text-base text-[#646464] font-archivo font-normal capitalize'>(+615842471145)</p>
                                </div>

                            </div>


                            <div className="flex items-center gap-6 px-6 py-6 bg-white shadow max-w-[450px] w-full rounded-lg">
                                <div className='bg-[#683292] w-[70px] h-[70px] rounded-full flex items-center justify-center text-white text-2xl'>
                                    <span><MdAttachEmail /></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h4 className='text-xl text-[#0f0200] font-archivo font-semibold '>Email us at</h4>
                                    <p className='text-base text-[#646464] font-archivo font-normal '>info.@gmail.com</p>
                                    <p className='text-base text-[#646464] font-archivo font-normal '>icedelights@gmail.com</p>
                                </div>

                            </div>
                        </div>


                        {/* contact form right side wrapper  */}
                        <div className='min-w-[686px] w-full'>

                            <form className='w-full flex flex-col gap-6'>

                                {/* first name and last name wrapper */}
                                <div className="flex items-center justify-between gap-6">

                                    {/* first name wrapper  */}
                                    <div className='flex flex-col gap-2.5 min-w-[330px] w-full'>
                                        <label className='text-base text-[#646464] font-archivo font-medium capitalize' htmlFor="first_name">First Name</label>
                                        <input type="text" className='w-full h-[51px] rounded-3xl border-[#e3e4e5] border pl-3' id='first_name' placeholder='First Name...' />
                                    </div>


                                    {/* last name wrapper  */}
                                    <div className='flex flex-col gap-2.5 min-w-[330px] w-full'>
                                        <label className='text-base text-[#646464] font-archivo font-medium capitalize' htmlFor="last_name">last Name</label>
                                        <input type="text" className='w-full h-[51px] rounded-3xl border-[#e3e4e5] border pl-3' id='last_name' placeholder='Last Name...' />
                                    </div>
                                </div>

                                

                                {/* email address  and phone wrapper */}
                                <div className="flex items-center justify-between gap-6">

                                    {/* email wrapper  */}
                                    <div className='flex flex-col gap-2.5 min-w-[330px] w-full'>
                                        <label className='text-base text-[#646464] font-archivo font-medium capitalize' htmlFor="email">Email address</label>
                                        <input type="email" className='w-full h-[51px] rounded-3xl border-[#e3e4e5] border pl-3' id='email' placeholder='Email...' />
                                    </div>


                                    {/* phone wrapper  */}
                                    <div className='flex flex-col gap-2.5 min-w-[330px] w-full'>
                                        <label className='text-base text-[#646464] font-archivo font-medium capitalize' htmlFor="phone">Phone</label>
                                        <input type="text" className='w-full h-[51px] rounded-3xl border-[#e3e4e5] border pl-3' id='phone' placeholder='Phone...' />
                                    </div>
                                </div>


                                <div className='w-full flex flex-col gap-2.5'>
                                    <label htmlFor="message" className='text-base text-[#646464] font-archivo font-medium capitalize'>message</label>
                                    <textarea className='w-full min-h-[179px] rounded-2xl h-full border border-[#e3e4e5] pl-3 pt-3' name="" id="message"></textarea>
                                </div>

                                <button type='submit' className='max-w-[220px] w-full h-[62px] flex items-center justify-center gap-2.5 bg-[#f83d8e] rounded-4xl text-lg text-white font-archivo font-medium capitalize cursor-pointer'> submit now <GoArrowRight color='white' size={'1.5rem'} /></button>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;