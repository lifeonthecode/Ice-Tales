import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router';

const OurMission = () => {
    return (
        <div className='w-full min-h-[723px] h-full bg-[#683292] flex items-center justify-center relative mb-[130px]'>
            <div className="lg:container mx-auto">
                <div className="flex items-center justify-start gap-16">
                    {/* text wrapper  */}
                    <div className='max-w-[509px] w-full h-auto space-y-10'>
                        <h3 className='text-6xl text-white font-berkshire-heading font-normal leading-16'>Our Mission is to Create Moments</h3>
                        <p className='text-xl text-white font-archivo leading-8'>We strive to foster a welcoming and joyful environment where customers of all ages can gather, celebrate, and make lasting memories. OUr commitment extends beyond serving great ice cream,</p>
                        <Link className='max-w-[200px] w-full h-[62px] rounded-4xl bg-[#f83d8e] text-base text-white font-archivo font-medium capitalize cursor-pointer flex justify-center items-center gap-4'>read more <GoArrowRight size={'1.5rem'} /> </Link>
                    </div>


                </div>
            </div>
            {/* image wrapper */}
            <div className='absolute top-0 right-0 max-w-[921px] w-full min-h-[723px] h-full'>
                <img className='min-h-[723px] h-full max-w-[921px] w-full object-cover' src="/our_mission.png" alt="our mission" />
            </div>
        </div>
    );
};

export default OurMission;