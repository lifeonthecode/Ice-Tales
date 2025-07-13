import React from 'react';
import { Link } from 'react-router';
import { GoArrowRight } from "react-icons/go";

const OurGuilt = () => {
    return (
        <div className='w-full min-h-[885px] h-full bg-[url(/our_guilt_bg.png)] bg-cover bg-no-repeat bg-center bg-fixed flex items-center justify-center mb-[130px]'>
            <div className="lg:container mx-auto">
                <div className="flex items-center gap-6 min-h-[581px] h-full bg-white justify-between max-w-[1110px] w-full mx-auto">

                    {/* left wrapper  */}

                    <div className=''>
                        <img className='max-w-[540px] w-full h-full object-cover' src="/our_guilt_image.png" alt="our guilt imag" />
                    </div>

                    {/* right wrapper  */}
                    <div className='max-w-[480px] w-full space-y-6'>
                        <h4 className='text-5xl text-[#0f0200] font-berkshire-heading font-normal capitalize'>our guilt-free <span className='text-[#f83d8e]'>vegan</span> ice cream</h4>
                        <p className='text-xl text-[646464] font-archivo font-normal'>Enjoy creamy, dairy-free ice cream that's both testy and kind to the planet</p>

                        <p className='text-xl text-[646464] font-archivo font-normal'>Delicious flavors made with only the best plant based ingredients</p>

                        <Link to={'/shop'} className='max-w-[257px] w-full h-[62px] flex items-center justify-center gap-2 bg-[#f83d8e] text-base text-white font-archivo font-semibold capitalize rounded-4xl'>see our vegan menu <GoArrowRight size={'1.5rem'} /> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurGuilt;