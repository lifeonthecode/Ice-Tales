import React, { useState } from 'react';
import Broadcom from './../../Components/Broadcom/Broadcom';
import ProductFilter from '../../Components/ProductFilter/ProductFilter';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { RiTableView } from "react-icons/ri";

const products = [
    {
        image: '/best_image_1.png',
        title: 'almond joy sundae',
        rating: 5,
        price: '$5.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, commodi. Eaque enim illum iure ut voluptatum atque nulla, aspernatur eum repellendus quam incidunt aut et ex eos hic corrupti doloribus cumque tempora necessitatibus porro accusantium veritatis? Laudantium maiores voluptatem repudiandae corrupti quidem quam tempore unde. Eaque praesentium provident maiores vel, harum dolore tempora aut dolorem a ipsa rem fugit nisi voluptate necessitatibus laudantium animi adipisci. Eveniet, consectetur doloribus earum esse rerum quasi maxime eius pariatur.',
        stock: 15,
    },
    {
        image: '/best_image_2.png',
        title: 'berry sorbet',
        rating: 4,
        price: '$4.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, commodi. Eaque enim illum iure ut voluptatum atque nulla, aspernatur eum repellendus quam incidunt aut et ex eos hic corrupti doloribus cumque tempora necessitatibus porro accusantium veritatis? Laudantium maiores voluptatem repudiandae corrupti quidem quam tempore unde. Eaque praesentium provident maiores vel, harum dolore tempora aut dolorem a ipsa rem fugit nisi voluptate necessitatibus laudantium animi adipisci. Eveniet, consectetur doloribus earum esse rerum quasi maxime eius pariatur.',
        stock: 20,
    },
    {
        image: '/best_image_3.png',
        title: 'chocolate chip cookie dough',
        rating: 4.5,
        price: '$6.49',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, commodi. Eaque enim illum iure ut voluptatum atque nulla, aspernatur eum repellendus quam incidunt aut et ex eos hic corrupti doloribus cumque tempora necessitatibus porro accusantium veritatis? Laudantium maiores voluptatem repudiandae corrupti quidem quam tempore unde. Eaque praesentium provident maiores vel, harum dolore tempora aut dolorem a ipsa rem fugit nisi voluptate necessitatibus laudantium animi adipisci. Eveniet, consectetur doloribus earum esse rerum quasi maxime eius pariatur.',
        stock: 25,
    },
    {
        image: '/best_image_1.png',
        title: 'almond joy sundae',
        rating: 5,
        price: '$5.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, commodi. Eaque enim illum iure ut voluptatum atque nulla, aspernatur eum repellendus quam incidunt aut et ex eos hic corrupti doloribus cumque tempora necessitatibus porro accusantium veritatis? Laudantium maiores voluptatem repudiandae corrupti quidem quam tempore unde. Eaque praesentium provident maiores vel, harum dolore tempora aut dolorem a ipsa rem fugit nisi voluptate necessitatibus laudantium animi adipisci. Eveniet, consectetur doloribus earum esse rerum quasi maxime eius pariatur.',
        stock: 5,
    },
    {
        image: '/best_image_2.png',
        title: 'berry sorbet',
        rating: 4,
        price: '$4.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, commodi. Eaque enim illum iure ut voluptatum atque nulla, aspernatur eum repellendus quam incidunt aut et ex eos hic corrupti doloribus cumque tempora necessitatibus porro accusantium veritatis? Laudantium maiores voluptatem repudiandae corrupti quidem quam tempore unde. Eaque praesentium provident maiores vel, harum dolore tempora aut dolorem a ipsa rem fugit nisi voluptate necessitatibus laudantium animi adipisci. Eveniet, consectetur doloribus earum esse rerum quasi maxime eius pariatur.',
        stock: 8,
    },
    {
        image: '/best_image_3.png',
        title: 'chocolate chip cookie dough',
        rating: 4.5,
        price: '$6.49',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, commodi. Eaque enim illum iure ut voluptatum atque nulla, aspernatur eum repellendus quam incidunt aut et ex eos hic corrupti doloribus cumque tempora necessitatibus porro accusantium veritatis? Laudantium maiores voluptatem repudiandae corrupti quidem quam tempore unde. Eaque praesentium provident maiores vel, harum dolore tempora aut dolorem a ipsa rem fugit nisi voluptate necessitatibus laudantium animi adipisci. Eveniet, consectetur doloribus earum esse rerum quasi maxime eius pariatur.',
        stock: 3,
    },

];

const Shop = () => {

    const [gridColumn, setGridColumn] = useState('grid-cols-3');

    return (
        <div>
            {/* broadcom component  */}
            <div className='mb-[130px]'>
                <Broadcom page={'shop layout'} />
            </div>
            <div className="mb-[130px]">
                <div className="lg:container mx-auto">
                    <div className="flex justify-between gap-10">
                        {/* filter wrapper  */}

                        <ProductFilter />

                        {/* products wrapper  */}
                        <div className='flex flex-col gap-10 min-w-[850px] w-full'>

                            {/* product header  */}
                            <div className='flex items-center justify-between gap-10'>
                                <div className='flex items-center gap-6'>
                                    <button onClick={() => setGridColumn('grid-cols-3')}

                                        className={`w-[44px] h-[44px] rounded-lg flex items-center justify-center  cursor-pointer border-none ${gridColumn === 'grid-cols-3' ? 'bg-[#f83d8e]' : 'bg-[#f1f9f9]'} `}
                                    >


                                        <RiLayoutGrid2Fill size={'1.5rem'} color={gridColumn === 'grid-cols-3' ? 'white' : 'black'} />
                                    </button>

                                    <button onClick={() => setGridColumn('grid-cols-1')}
                                        className={`w-[44px] h-[44px] rounded-lg flex items-center justify-center  cursor-pointer border-none ${gridColumn === 'grid-cols-1' ? 'bg-[#f83d8e]' : 'bg-[#f1f9f9]'} `}>
                                        <RiTableView size={'1.5rem'} color={gridColumn === 'grid-cols-1' ? 'white' : 'black'} />
                                    </button>
                                </div>

                                {/* sorting wrapper  */}
                                <div>
                                    <select defaultValue="Server location" className="select select-neutral bg-no border border-[#e3e4e5] rounded-4xl outline-0 focus:outline-0 font-berkshire-heading font-normal min-w-[181px] w-full h-[40px] text-base text-[#0f0200]">
                                        <option disabled={true}>Default Sorting</option>
                                        <option>Hight Price</option>
                                        <option>Lowest Price</option>
                                        <option>Review</option>
                                    </select>
                                </div>
                            </div>

                            

                            {/* products  */}
                            <div className={`grid ${gridColumn} gap-6`}>
                                {
                                    products?.map((product, index) => (
                                        <ProductCard card={product} key={index} gridColumn={gridColumn} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;