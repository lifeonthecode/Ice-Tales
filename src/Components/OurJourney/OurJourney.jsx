import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router';

const OurJourney = () => {
    return (
        <div className='w-full min-h-[886px] h-full bg-white flex items-center justify-center'>
            <div className="lg:container mx-auto">
                <div className="flex items-center justify-center gap-20">
                    {/* image wrapper  */}
                    <div>
                        <img className='min-w-[590px] w-full min-h-[590px] h-full rounded-full object-cover' src="/about_image.jpg" alt="about image" />
                    </div>

                    {/* text wrapper  */}
                    <div className='max-w-[565px] w-full h-auto'>
                        <h3 className='text-5xl text-[#0f0200] font-berkshire-heading font-normal capitalize mb-8'>our <span className='text-[#f83d8e]'>journey</span> began <br /> with a simple dream</h3>

                        <p className='text-xl text-[#646464] font-archivo font-normal mb-8'>Our goal is to make the best ice cream using only the finest, natural ingredients, From rich, cream classics to adventurous ne creations, every flavors is meticulously crafted in-house to ensure tha highest quality and freshness.</p>

                        <p className='text-xl text-[#646464] font-archivo font-normal mb-10'>We take pride in offering a diverse range of options, including dairy-free, vegan, and gluten-free choices, so everyone can find their perfect scoop</p>

                        <Link  className='max-w-[200px] w-full h-[62px] rounded-4xl bg-[#f83d8e] text-base text-white font-archivo font-medium capitalize cursor-pointer flex justify-center items-center gap-4'>read more <GoArrowRight size={'1.5rem'} /> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurJourney;