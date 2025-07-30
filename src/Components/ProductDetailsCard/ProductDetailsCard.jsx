import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { GoArrowRight } from 'react-icons/go';
import RelatedProduct from '../RelatedProduct/RelatedProduct';



const products = [
    {
        image: '/product_details_4.png',
    },
    {
        image: '/product_details_2.png',
    },
    {
        image: '/product_details_3.png',
    },
    {
        image: '/product_details_4.png',
    },
]

const relatedProducts = [
    {
        image: '/related_product_1.png',
        title: 'almond joy sundae',
        rating: 5,
        price: '$5.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, commodi. Eaque enim illum iure ut voluptatum atque nulla, aspernatur eum repellendus quam incidunt aut et ex eos hic corrupti doloribus cumque tempora necessitatibus porro accusantium veritatis? Laudantium maiores voluptatem repudiandae corrupti quidem quam tempore unde. Eaque praesentium provident maiores vel, harum dolore tempora aut dolorem a ipsa rem fugit nisi voluptate necessitatibus laudantium animi adipisci. Eveniet, consectetur doloribus earum esse rerum quasi maxime eius pariatur.',
        bg: 'ffeff0'
    },
    {
        image: '/related_product_2.png',
        title: 'berry sorbet',
        rating: 4,
        price: '$4.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, commodi. Eaque enim illum iure ut voluptatum atque nulla, aspernatur eum repellendus quam incidunt aut et ex eos hic corrupti doloribus cumque tempora necessitatibus porro accusantium veritatis? Laudantium maiores voluptatem repudiandae corrupti quidem quam tempore unde. Eaque praesentium provident maiores vel, harum dolore tempora aut dolorem a ipsa rem fugit nisi voluptate necessitatibus laudantium animi adipisci. Eveniet, consectetur doloribus earum esse rerum quasi maxime eius pariatur.',
        bg: 'ffeff0'
    },
    {
        image: '/related_product_3.png',
        title: 'chocolate chip cookie dough',
        rating: 4.5,
        price: '$6.49',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, commodi. Eaque enim illum iure ut voluptatum atque nulla, aspernatur eum repellendus quam incidunt aut et ex eos hic corrupti doloribus cumque tempora necessitatibus porro accusantium veritatis? Laudantium maiores voluptatem repudiandae corrupti quidem quam tempore unde. Eaque praesentium provident maiores vel, harum dolore tempora aut dolorem a ipsa rem fugit nisi voluptate necessitatibus laudantium animi adipisci. Eveniet, consectetur doloribus earum esse rerum quasi maxime eius pariatur.',
        bg: 'ffeff0'
    },
    {
        image: '/related_product_4.png',
        title: 'almond joy sundae',
        rating: 5,
        price: '$5.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, commodi. Eaque enim illum iure ut voluptatum atque nulla, aspernatur eum repellendus quam incidunt aut et ex eos hic corrupti doloribus cumque tempora necessitatibus porro accusantium veritatis? Laudantium maiores voluptatem repudiandae corrupti quidem quam tempore unde. Eaque praesentium provident maiores vel, harum dolore tempora aut dolorem a ipsa rem fugit nisi voluptate necessitatibus laudantium animi adipisci. Eveniet, consectetur doloribus earum esse rerum quasi maxime eius pariatur.',
        bg:'ffeff0'
    },

];
const ProductDetailsCard = () => {

    const [activeProduct, setActiveProduct] = useState(0);
    const [quantity, setQuantity] = useState(1);

    // handle decrease 
    const decrease = () => {
        if (quantity > 1) {

            setQuantity(quantity - 1);
        }
    }
    // handle increase 
    const increase = () => {
        setQuantity(quantity + 1);
    }

    return (
        <div className='w-full py-[130px]'>
            <div className="lg:container mx-auto">
                <div className="flex items-center justify-between gap-10">

                    {/* product image wrapper  */}
                    <div className='flex items-center gap-8 max-w-[600px] w-full '>
                        <div className="flex flex-col gap-6">
                            {
                                products?.map((product, index) => (
                                    <div onClick={() => setActiveProduct(index)} key={index} className={`max-w-[100px] m-h-[100px] w-full h-full p-2 flex items-center justify-center border-2 rounded-xl cursor-pointer ${index === activeProduct ? 'border-[#f83d8e]' : 'border-white'}`}>
                                        <img src={product?.image} className='max-w-[90px] min-h-[90px] w-full h-full rounded-xl' alt={`product_${index + 1}`} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='max-w-[480px] w-full min-h-[571px] h-full bg-[#ffeff0] flex items-center justify-center rounded-2xl'>
                            <img src={products[activeProduct].image} className='max-w-[400px] w-full max-h-[300px] h-full' alt="" />
                        </div>
                    </div>

                    {/* product info wrapper  */}
                    <div className='flex flex-col gap-6 max-w-[700px] w-full'>

                        <div className="flex items-center gap-2 5">
                            <span className="text-[#fbab2a]"><FaStar /></span>
                            <span className="text-[#fbab2a]"><FaStar /></span>
                            <span className="text-[#fbab2a]"><FaStar /></span>
                            <span className="text-[#fbab2a]"><FaStar /></span>
                            <span className="text-[#fbab2a]"><FaStar /></span>
                            <span className='text-xl font-archivo text-[#0f0200] font-semibold'>(4.9/5)</span>
                        </div>
                        <h3 className='text-3xl text-[#212529] font-archivo font-bold capitalize'>classic vanilla ice cream</h3>
                        <p className='text-3xl text-[#683292] font-archivo font-bold'>$5.99</p>
                        <p className='text-lg text-[#646464] font-archivo font-normal'>Neque porro reisquam est aui Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, repellendus! Lorem ipsum dolor sit amet.</p>

                        <div className="flex flex-col gap-5">
                            <h4 className='text-xl text-[#0f0200] font-archivo font-bold'>color:</h4>
                            <div className="flex gap-3">
                                <span className='w-[32px] h-[32px] rounded-full border-[4px] border-[#e3e4e5] bg-[#be2a36]'></span>
                                <span className='w-[32px] h-[32px] rounded-full border-[4px] border-[#e3e4e5] bg-[#e4ccaf]'></span>
                                <span className='w-[32px] h-[32px] rounded-full border-[4px] border-[#e3e4e5] bg-[#bcec9f]'></span>
                                <span className='w-[32px] h-[32px] rounded-full border-[4px] border-[#e3e4e5] bg-[#9a5f2e]'></span>
                            </div>
                        </div>
                        {/* sizes */}
                        <div className="flex flex-col gap-5 pb-8 border-b-2 border-[#e3e4e5]">
                            <h4 className='text-xl text-[#0f0200] font-archivo font-bold'>size:</h4>
                            <div className="flex gap-3">
                                <button className='w-[43px] h-[43px] rounded-full bg-none border-2 border-[#e3e4e5] flex items-center justify-center text-lg text-[#0f0220] font-archivo font-normal capitalize'>L</button>
                                <button className='w-[43px] h-[43px] rounded-full bg-none border-2 border-[#e3e4e5] flex items-center justify-center text-lg text-[#0f0220] font-archivo font-normal capitalize'>M</button>
                                <button className='w-[43px] h-[43px] rounded-full bg-none border-2 border-[#e3e4e5] flex items-center justify-center text-lg text-[#0f0220] font-archivo font-normal capitalize'>S</button>
                            </div>
                        </div>


                        {/* add to cart wrapper  */}
                        <div className="flex items-center gap-12">
                            <div className="flex items-center justify-between max-w-[200px] w-full h-[53px] border border-[#e3e4e5] rounded-3xl px-6">

                                {/* decrease quantity  */}
                                <button onClick={decrease} className='bg-none cursor-pointer border-r-2 pr-2 border-[#e3e4e5] h-full'><FaMinus size={'1.5rem'} color='black' /></button>

                                <span className='text-2xl text-black'>{quantity}</span>

                                {/* increase quantity  */}
                                <button onClick={increase} className='bg-none cursor-pointer border-l-2 pl-2 border-[#e3e4e5] h-full'><FaPlus size={'1.5rem'} color='black' /></button>
                            </div>

                            <button type='submit' className='max-w-[200px] w-full h-[62px] rounded-4xl bg-[#f83d8e] text-xl text-white font-archivo font-semibold capitalize cursor-pointer flex justify-center items-center gap-4'>add to cart <GoArrowRight size={'1.5rem'} /> </button>
                        </div>


                        <div className="flex items-center gap-12 mt-4">
                            <button className='text-xl text-[#787878] font-archivo font-medium capitalize flex items-center justify-center gap-3 cursor-pointer'><FaRegHeart color='#787878' size={'1.5rem'} /> add to wishlist</button>
                            <button className='text-xl text-[#787878] font-archivo font-medium capitalize cursor-pointer'>compare</button>
                        </div>


                    </div>
                </div>
                {/* tab container  */}
                <div className='mt-[94px]'>
                    <div className="tabs tabs-border space-y-6">
                        <input type="radio" name="my_tabs_2" className="tab text-xl text-[#0f0200] font-bold font-archivo capitalize" aria-label="Description" defaultChecked />

                        <div className="tab-content  border-t border-b border-r-0 border-l-0 border-[#e3e4e5] py-10 space-y-6">
                            <p className='text-base text-[#787878] font-archivo font-normal normal-case'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto enim inventore, quisquam quos expedita saepe! Ducimus porro voluptates voluptas omnis laboriosam inventore nulla suscipit aliquid quidem voluptatum, veniam voluptatem hic aut quisquam eos expedita ab quis, delectus cumque rerum debitis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam repudiandae harum perspiciatis, ad eveniet placeat obcaecati ipsa voluptatum magnam a nam inventore eos quasi ex labore mollitia non optio consectetur, reprehenderit tenetur qui. Eos debitis voluptas, nemo corrupti laboriosam sequi? Asperiores porro, sapiente mollitia cupiditate quam modi quis enim iste at, quos, voluptatum esse nobis ullam distinctio inventore nulla. Enim.</p>

                            <p className='text-base text-[#787878] font-archivo font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat modi neque nisi sint corporis placeat quis natus dolores, amet repellendus dicta possimus adipisci expedita? Fugiat minus suscipit sed ut! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quod voluptas minus ad ut eius doloribus dolorum eos, mollitia dignissimos repellendus necessitatibus esse fuga aperiam vitae sunt libero. Tempore commodi porro quisquam enim perferendis, error officiis maiores, quos magni maxime ab odio amet suscipit provident aperiam! A perspiciatis consectetur deserunt?</p>
                        </div>

                        <input type="radio" name="my_tabs_2" className="tab text-xl text-[#0f0200] font-bold font-archivo capitalize" aria-label="Additional Information"  />

                        <div className="tab-content border-t border-b border-r-0 border-l-0 border-[#e3e4e5] py-10 space-y-6">
                            <p className='text-base text-[#787878] font-archivo font-normal normal-case'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto enim inventore, veniam voluptatem hic aut quisquam eos expedita ab quis, delectus cumque rerum debitis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam repudiandae harum perspiciatis, ad eveniet placeat obcaecati ipsa voluptatum magnam a nam inventore eos quasi ex labore mollitia non optio consectetur, reprehenderit tenetur qui. Eos debitis voluptas, nemo corrupti laboriosam sequi? Asperiores porro, sapiente mollitia cupiditate quam modi quis enim iste at, quos, voluptatum esse nobis ullam distinctio inventore nulla. Enim.</p>

                            <p className='text-base text-[#787878] font-archivo font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat modi neque nisi sint corporis placeat quis natus dolores, amet repellendus dicta possimus adipisci expedita? Fugiat minus suscipit sed ut! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quod voluptas minus ad ut eius doloribus dolorum eos, mollitia dignissimos repellendus necessitatibus esse fuga aperiam vitae sunt libero. Tempore commodi porro quisquam enim perferendis, error officiis maiores, quos magni maxime ab odio amet suscipit provident aperiam! A perspiciatis consectetur deserunt?</p>
                        </div>

                        <input type="radio" name="my_tabs_2" className="tab text-xl text-[#0f0200] font-bold font-archivo capitalize" aria-label="Reviews" />


                        <div className="tab-content border-t border-b border-r-0 border-l-0 border-[#e3e4e5] py-10 space-y-6">
                            <p className='text-base text-[#787878] font-archivo font-normal normal-case'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto enim inventore, quisquam quos expedita saepe! Ducimus porro voluptates voluptas omnis laboriosam inventore nulla suscipit aliquid quidem voluptatum, veniam voluptatem hic aut quisquam eos expedita ab quis, delectus cumque rerum debitis? Lorem ipsum dolor sit, amet consectetur adipisicing elit.voluptatum esse nobis ullam distinctio inventore nulla. Enim.</p>

                            <p className='text-base text-[#787878] font-archivo font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat modi neque nisi sint corporis placeat quis natus dolores, amet repellendus dicta possimus adipisci expedita? Fugiat minus suscipit sed ut! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quod voluptas minus ad ut eius doloribus dolorum eos, mollitia dignissimos repellendus necessitatibus esse fuga aperiam vitae sunt libero. Tempore commodi porro quisquam enim perferendis, error officiis maiores, quos magni maxime ab odio amet suscipit provident aperiam! A perspiciatis consectetur deserunt?</p>
                        </div>
                    </div>
                </div>



                <div className='pt-[130px]'>

                    <div className="flex items-center justify-center gap-6 flex-col mb-16">
                        <h3 className='text-5xl text-[#0f0200] font-berkshire-heading font-normal capitalize'>Related <span className='text-[#f83d8e]'>Products</span></h3>
                        <p className='text-xl text-[#646464] font-archivo font-normal'>Choose from some of related products</p>
                    </div>

                    {/* related products wrapper  */}
                    <div className='grid grid-cols-4 gap-8'>
                        {
                            relatedProducts?.map((product, index) => (

                                <RelatedProduct key={index} card={product} />
                            ))
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductDetailsCard;