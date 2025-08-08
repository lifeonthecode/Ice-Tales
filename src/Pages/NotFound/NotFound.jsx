import React from 'react';

const NotFound = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center  bg-[url("/bg.png")] bg-cover bg-no-repeat bg-center'>
            <div className='flex flex-col justify-center items-center gap-6'>
                <h3 className='text-9xl text-[#0f0200] font-berkshire-heading font-normal capitalize'>404</h3>
                <h4 className='text-4xl text-[#0f0200] font-archivo font-medium capitalize'>Sorry! the page not found;(</h4>
                <p className='text-base text-[#646464] font-archivo font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, corporis.</p>
            </div>
        </div>
    );
};

export default NotFound;