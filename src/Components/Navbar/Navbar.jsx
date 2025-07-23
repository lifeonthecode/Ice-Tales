import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { GoArrowRight } from 'react-icons/go';

const navLinks = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'About Us', path: '/about' },
    { id: 3, title: 'Pages' },
    { id: 4, title: 'Blog', path: '/blog' },
    { id: 5, title: "Faq's", path: '/faqs' },
]

const Navbar = () => {

    const [activeLink, setActiveLink] = useState(false);
    const [activeSearch, setActiveSearch] = useState(false);

    return (
        <div className='w-full bg-white flex items-center justify-center h-[90px] sticky top-0 left-0 z-50 shadow-lg'>

            <div className="lg:container mx-auto">
                <div className="flex items-center justify-between md:gap-10 gap-6">

                    {/* logo wrapper  */}
                    <div>
                        <Link to={'/'}><img src='/logo.png' alt='logo image' /></Link>
                    </div>

                    {/* right side wrapper */}
                    <div className='flex items-center justify-between md:gap-10 gap-6'>

                        {/* navbar menu  */}
                        <nav className='flex items-center gap-10'>

                            {
                                navLinks?.map((link, index) => {
                                    if (index === 2) {
                                        return (
                                            <div className="dropdown" onClick={() => {
                                                    setActiveLink(!activeLink)
                                                }}>

                                                <button 
                                                
                                                className={`text-base font-archivo font-semibold  capitalize flex items-center gap-1 cursor-pointer ${activeLink ? 'text-[#f83d8e]' : 'text-[#0f0200]'}`}

                                                tabIndex={0} role="button">
                                                    Pages
                                                    <span>
                                                        {
                                                            activeLink ? <MdArrowDropUp size={'1.8rem'} /> : <MdArrowDropDown size={'1.8rem'} />
                                                        }
                                                    </span>
                                                </button>


                                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                                    <li><Link to={'/team'} className='text-base text-[#0f0200] font-archivo font-normal capitalize'>Team</Link></li>

                                                    <li><Link to={'/review'} className='text-base text-[#0f0200] font-archivo font-normal capitalize'>Review</Link></li>

                                                    <li><Link to={'/shop'} className='text-base text-[#0f0200] font-archivo font-normal capitalize'>Shop</Link></li>
                                                </ul>
                                            </div>
                                        )
                                    }

                                    return (
                                        <NavLink

                                            key={link.id}
                                            to={link?.path}
                                            className={({ isActive }) => isActive ? 'text-base font-archivo font-semibold text-[#f83d8e] capitalize flex items-center gap-1' : 'text-base font-archivo font-semibold text-[#0f0200] capitalize flex items-center gap-1'}

                                        >
                                            {link.title}
                                        </NavLink>
                                    )
                                })
                            }

                        </nav>

                        <div className='flex items-center md:gap-10 gap-6'>
                            <button onClick={() => setActiveSearch(true)} className='bg-none border-none cursor-pointer'><CiSearch color='#0f0200' size={'1.9rem'} /></button>
                            <Link to={'/cart'} className='relative'><BsCart color='#0f0200' size={'2rem'} />
                                <span className='absolute -bottom-[5px] -right-[5px] w-[18px] h-[18px] rounded-full bg-[#683292] text-sm font-archivo font-normal text-white flex items-center justify-center'>0</span></Link>
                            <Link to={'/contact'} className='px-6 py-4 rounded-2xl bg-[#f23d8e] text-base text-white font-archivo font-bold capitalize flex gap-3 items-center justify-center'>contact us <GoArrowRight color='white' size={'1.5rem'} /> </Link>
                        </div>

                    </div>

                </div>
            </div>

            {/* search box  */}
            <div className={`absolute right-[23%] max-w-[650px]  w-full px-4 py-3 h-auto bg-white shadow-2xl flex flex-col gap-4 rounded-2xl ${activeSearch ? 'top-[10px]' : ' -top-[200px]'} transition-all duration-500 ease-in-out`}>
                <h3 className='text-2xl text-[#f83d8e] font-berkshire-heading font-semibold capitalize'>search product</h3>
                <form action="" className='w-full flex items-center gap-6 h-[70px]' >

                    <input type="text" className='max-w-[450px] rounded-3xl w-full h-full border-none outline-none pl-2.5 text-base font-berkshire-heading capitalize text-white bg-[#f83d8e]' placeholder='search' />
                    <button onClick={() => setActiveSearch(false)} type='submit' className='max-w-[150px] w-full h-full bg-[#f83d8e] cursor-pointer text-base text-white font-berkshire-heading font-semibold capitalize rounded-2xl'>search</button>
                </form>
            </div>
        </div>
    );
};

export default Navbar;