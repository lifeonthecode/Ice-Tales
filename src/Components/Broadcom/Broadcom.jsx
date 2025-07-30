import React from 'react';
import { Link, useLocation } from 'react-router';

const Broadcom = ({page}) => {

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);


    return (
        <div className='w-full min-h-[467px] h-full bg-[url("/bg.png")] bg-cover bg-no-repeat bg-center flex items-center justify-center'>

            <div className="lg:container mx-auto">
                <div className="flex items-center justify-center">
                    <div className='flex flex-col gap-8 text-center'>
                        <h2 className='text-6xl text-[#0f0200] font-berkshire-heading font-normal capitalize'>{page}</h2>
                        <div className="flex items-center gap-4 justify-center bg-white min-w-[231px] w-full h-[52px] rounded-3xl px-4 shadow">
                            <Link to={'/'} className='text-[#f83de8] text-xl font-archivo font-normal capitalize'>home</Link>

                            {
                                pathnames.map((item, index) => {

                                    const isLast = index === pathnames.length - 1;
                                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

                                    return (
                                        <div className="flex items-center gap-4" key={index}>
                                            {
                                                isLast ? (
                                                    <h3 className={` text-xl font-archivo font-normal capitalize flex items-center gap-2.5 ${isLast ? 'text-[#0f0200]' : 'text-[#f83de8]' }`}><span>/</span> {item}</h3>
                                                ) : (  
                                                    <Link to={routeTo} className='text-[#f83de8] text-xl font-archivo font-normal capitalize'><span>/</span> {item}</Link>
                                                 )

                                            }
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Broadcom;