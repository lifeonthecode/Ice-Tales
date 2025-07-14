import React from 'react';
import { Link } from 'react-router';
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowTurnUp } from "react-icons/fa6";

const Footer = () => {


    const scrollToTopWithDuration = (duration) => {
        const start = window.scrollY;
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1 );

            const ease = 1 - Math.pow(1 - progress, 3); // ease-in-out cubic function

            window.scrollTo(0, start * (1 - ease));

            if(progress < 1) {
                requestAnimationFrame(animateScroll);
            }
            
        };

        requestAnimationFrame(animateScroll);
    }


    return (
        <div className='w-full min-h-[386px] h-full bg-[#683293] flex items-center justify-center relative'>
            <div className="lg:container mx-auto">
                <div className="grid grid-cols-4 gap-6">

                    {/* logo wrapper  */}
                    <div>
                        <Link to={'/'}><img src='/footer_logo.png' alt='footer logo' /></Link>
                    </div>

                    {/* footer menu  */}
                    <div className="flex flex-col gap-4">
                        <h4 className='text-[22px] text-white font-archivo font-semibold capitalize'>navigation</h4>
                        <ul className='flex flex-col justify-center gap-4'>
                            <li><Link to={'/'} className='text-base font-archivo font-normal text-[#cfb6e2] capitalize'>Home</Link></li>
                            <li><Link to={'/about'} className='text-base font-archivo font-normal text-[#cfb6e2] capitalize'>About Us</Link></li>
                            <li><Link to={'/pages'} className='text-base font-archivo font-normal text-[#cfb6e2] capitalize'>Pages</Link></li>
                            <li><Link to={'/blog'} className='text-base font-archivo font-normal text-[#cfb6e2] capitalize'>Blog</Link></li>
                            <li><Link to={'/faqs'} className='text-base font-archivo font-normal text-[#cfb6e2] capitalize'>Faq's</Link></li>
                        </ul>
                    </div>

                    {/* address wrapper  */}
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <button className='w-[46px] h-[46px] rounded-full bg-[#8556aa] flex items-center justify-center'><CiLocationOn size={'1.5rem'} color='white' /></button>
                            <div className='flex flex-col gap-2.5'>

                                <h4 className='text-base text-white font-archivo font-semibold capitalize'>Address:</h4>
                                <p className='text-sm text-[#cfb6e2] font-archivo font-normal'>121 king street melbourne, 3000,</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className='w-[46px] h-[46px] rounded-full bg-[#8556aa] flex items-center justify-center'><AiOutlineMail size={'1.5rem'} color='white' /></button>
                            <div className='flex flex-col gap-2.5'>

                                <h4 className='text-base text-white font-archivo font-semibold capitalize'>Email:</h4>
                                <p className='text-sm text-[#cfb6e2] font-archivo font-normal'>info@example.com</p>
                            </div>
                        </div>
                    </div>


                    {/* social icons wrapper  */}
                    <div className="flex flex-col gap-4">
                        <div className='flex items-center gap-4'>
                            <button className='text-3xl text-white font-archivo font-semibold'><BsFillTelephoneFill /></button>
                            <div>
                                <h4 className='text-xl text-white font-archivo font-bold capitalize'>+12345678941</h4>
                                <p className='text-sm text-[#cfb6e2] font-archivo font-normal'>Got Questions? Call use 24/7</p>
                            </div>

                        </div>
                        {/* social media icons */}
                        <div className='flex items-center gap-4'>
                            <Link className='w-[46px] h-[46px] rounded-full bg-[#8556aa] flex items-center justify-center'><FaFacebookF size={'1.5rem'} color='white' /></Link>

                            <Link className='w-[46px] h-[46px] rounded-full bg-[#8556aa] flex items-center justify-center'><FaInstagram size={'1.5rem'} color='white' /></Link>

                            <Link className='w-[46px] h-[46px] rounded-full bg-[#8556aa] flex items-center justify-center'><FaYoutube size={'1.5rem'} color='white' /></Link>
                        </div>

                    </div>

                </div>
            </div>

            <button onClick={() => scrollToTopWithDuration(7000)} className='absolute bottom-10 right-10 w-[64px] h-[64px] rounded-lg bg-[#f83d8e] flex items-center justify-center cursor-pointer'><FaArrowTurnUp color='white' size={'2rem'} /></button>
        </div>
    );
};

export default Footer;