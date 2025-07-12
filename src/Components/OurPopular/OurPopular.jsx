import React from 'react';
import Slider from '../Share/Slider/Slider';
import SectionHeader from './../Share/SectionHeader/SectionHeader';


const sliderData = [
    {
        image: '/popular_image_1.png',
        title: 'almond joy sundae',
        rating: 5,
        price: '$5.99',
    },
    {
        image: '/popular_image_2.png',
        title: 'berry sorbet',
        rating: 4,
        price: '$4.99',
    },
    {
        image: '/popular_image_3.png',
        title: 'chocolate chip cookie dough',
        rating: 4.5,
        price: '$6.49',
    },
    {
        image: '/popular_image_1.png',
        title: 'mint chocolate chip',
        rating: 5,
        price: '$5.99',
    },
    {
        image: '/popular_image_2.png',
        title: 'strawberry swirl',
        rating: 4.5,
        price: '$5.49',
    },
    {
        image: '/popular_image_3.png',
        title: 'vanilla bean',
        rating: 4,
        price: '$4.99',
    },
];

const OurPopular = () => {
    return (
        <div className='w-full pt-[130px] pb-[130px]'>
            <div className="lg:container mx-auto">

                <div>
                    <SectionHeader title={`our popular vegan treats`} subTitle={'Check out our favorite vegan ice cream flavors'}  />
                </div>

                <Slider sliderData={sliderData} />
            </div>
        </div>
    );
};

export default OurPopular;