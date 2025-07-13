import React from 'react';
import SectionHeader from '../Share/SectionHeader/SectionHeader';
import Slider from '../Share/Slider/Slider';

const sliderData = [
    {
        image: '/best_image_1.png',
        title: 'almond joy sundae',
        rating: 5,
        price: '$5.99',
    },
    {
        image: '/best_image_2.png',
        title: 'berry sorbet',
        rating: 4,
        price: '$4.99',
    },
    {
        image: '/best_image_3.png',
        title: 'chocolate chip cookie dough',
        rating: 4.5,
        price: '$6.49',
    },
    {
        image: '/best_image_1.png',
        title: 'almond joy sundae',
        rating: 5,
        price: '$5.99',
    },
    {
        image: '/best_image_2.png',
        title: 'berry sorbet',
        rating: 4,
        price: '$4.99',
    },
    {
        image: '/best_image_3.png',
        title: 'chocolate chip cookie dough',
        rating: 4.5,
        price: '$6.49',
    },

];

const BestIceCream = () => {
    return (
        <div className='w-full min-h-[913px] h-full pb-[130px] bg-white'>
            <div className="lg:container mx-auto">

                <div>
                    <SectionHeader title={`best vegan ice creams`} subTitle={'Our best-selling vegan ice creams and desserts'}  />
                </div>

                <Slider sliderData={sliderData} />
            </div>
        </div>
    );
};

export default BestIceCream;