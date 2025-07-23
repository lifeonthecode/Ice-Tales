import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";


const categories = [
    {
        name: 'canned ice cream',
        count: 3
    },
    {
        name: 'frozen yogurt',
        count: 5
    },
    {
        name: 'ice cream cakes',
        count: 3
    },
    {
        name: 'milkshakes',
        count: 6
    },
    {
        name: 'popsicles',
        count: 4
    },
    {
        name: 'sundaes',
        count: 5
    },
];

const priceOptions = [
    {
        minPrice: 5,
        maxPrice: 10,
    },
    {
        minPrice: 10,
        maxPrice: 20,
    },
    {
        minPrice: 20,
        maxPrice: 30,
    },
    {
        minPrice: 30,
        maxPrice: 50,
    },
    {
        minPrice: 60,
        maxPrice: 100,
    },
];


const featuredProducts = [
    {
        name: 'almond joe',
        image: '/featured_product_1.png',
        oldPrice: 9.80,
        newPrice: 4.99,
    },
    {
        name: 'berry sorbet',
        image: '/featured_product_2.jpg',
        oldPrice: 6.90,
        newPrice: 5.99,
    },
    {
        name: 'chocolate chip',
        image: '/featured_product_3.jpg',
        oldPrice: 7.90,
        newPrice: 6.99,
    },
    {
        name: 'dairy free',
        image: '/featured_product_4.jpg',
        oldPrice: 5.90,
        newPrice: 4.99,
    },
]

const ProductFilter = () => {

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedPrice, setSelectedPrice] = useState({
        minPrice: 5,
        maxPrice: 10
    })

    return (
        <div className='max-w-[300px] w-full h-auto'>

            {/* search wrapper  */}
            <div className='mb-12'>
                <form action="" className='w-full h-[44px] relative'>
                    <input type="text" placeholder='Search' className='w-full h-full rounded-4xl outline-0 text-base text-[#0f0200] font-archivo font-medium capitalize border-[#e3e4e5] border pl-3' />
                    <button className='absolute top-[32%] right-4 bg-none border-none cursor-pointer'><FiSearch color='#787878' size={'1.25rem'} /></button>
                </form>
            </div>

            {/* categories wrapper  */}
            <div className="flex flex-col gap-5 pb-12 border-b-2 border-[#e3e4e5]">
                <h3 className='text-2xl text-[#0f0200] font-berkshire-heading font-normal capitalize'>categories</h3>

                <div className="flex flex-col gap-3">
                    {
                        categories?.map((category, index) => (
                            <label className='flex items-center gap-3 cursor-pointer' htmlFor={`category_${index + 1}`} key={index}>
                                <input type="radio"
                                    name="category"
                                    id={`category_${index + 1}`}
                                    value={category?.name}
                                    checked={selectedCategory === category?.name}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className='w-[25px] h-[25px] appearance-none checked:bg-[#f83de8] rounded-full border-[#e3e4e5] border-2'
                                />

                                <span className='flex-1 text-xl text-[#787878] font-archivo font-medium capitalize'>{category?.name} ({category?.count})</span>
                            </label>
                        ))
                    }
                </div>
            </div>

            {/* price filtering wrapper  */}
            <div className="flex flex-col gap-5 pb-12 border-b-2 border-[#e3e4e5] mt-12">
                <h3 className='text-2xl text-[#0f0200] font-berkshire-heading font-normal capitalize'>filter by price</h3>


                <div className="flex flex-col gap-3">
                    {
                        priceOptions?.map((price, index) => (
                            <button onClick={() => setSelectedPrice({
                                minPrice: price?.minPrice,
                                maxPrice: price?.maxPrice,
                            })} key={index} className={`flex items-center gap-2.5 cursor-pointer  text-xl font-berkshire-heading font-normal capitalize ${selectedPrice?.maxPrice === price?.maxPrice ? 'text-[#f83de8]' : 'text-[#0f0200]'}`}>

                                <span >{price?.minPrice}$</span>
                                <span>{price?.maxPrice}$</span>
                            </button>
                        ))
                    }
                </div>
            </div>


            {/* featured products wrapper  */}
            <div className="flex flex-col gap-5 pb-12 mt-12">
                <h3 className='text-2xl text-[#0f0200] font-berkshire-heading font-normal capitalize'>filter by price</h3>

                <div className="flex flex-col gap-4">
                    {
                        featuredProducts?.map((product, index) => (
                            <div className="flex items-center gap-3" key={index}>
                                <img className='w-[66px] h-[62px] object-cover' src={product?.image} alt={product?.name} />
                                <div className="flex flex-col gap-1 5">
                                    <h4 className='text-xl text-[#0f0200] font-archivo font-bold capitalize'>{product?.name}</h4>
                                    <div className='flex items-center gap-3'>
                                        <p className='text-base text-[#787878] font-archivo font-normal line-through'>${product?.oldPrice}</p>
                                        <p className='text-base text-[#f83d8e] font-archivo font-bold'>${product?.newPrice}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>

    );
};

export default ProductFilter;