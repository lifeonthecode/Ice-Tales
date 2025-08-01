import React, { useState } from 'react';
import Broadcom from './../Broadcom/Broadcom';
import OrderSummary from '../OrderSummary/OrderSummary';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router';
import { GoArrowLeft } from 'react-icons/go';



const initialCartItems = [
    {
        name: 'classic vanilla',
        image: '/cart_1.png',
        color: 'white',
        size: 'L',
        price: 4.99,
        quantity: 2,
    },
    {
        name: 'chocolate brownie',
        image: '/cart_2.png',
        color: 'red',
        size: 'M',
        price: 5.99,
        quantity: 3,
    },
    {
        name: 'strawberry cake',
        image: '/cart_3.png',
        color: 'blue',
        size: 'Xl',
        price: 6.99,
        quantity: 1,
    },
    {
        name: 'mint chocolate',
        image: '/cart_4.png',
        color: 'yellow',
        size: 'L',
        price: 3.99,
        quantity: 5,
    },
]

const ShoppingCart = () => {


    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleQuantityChange = (index, action) => {
        const updateItems = [...cartItems];
        if (action === 'increase') {
            updateItems[index].quantity += 1;
        }
        else if (action === 'decrease' && updateItems[index].quantity > 1) {
            updateItems[index].quantity -= 1;
        };

        setCartItems(updateItems);
    };


    const handleRemoveItem = (index) => {
        const removeItem = cartItems?.filter((_, i) => i !== index);
        setCartItems(removeItem);
    }

    return (
        <div className='w-full'>

            {/* broadcom component  */}
            <div>
                <Broadcom page={'shopping cart'} />
            </div>
            <div className='w-full py-[130px]'>

                <div className="md:container mx-auto">
                    <div className="flex gap-10 w-full">
                        <div className='flex flex-col gap-10 w-full'>
                            <div className='flex items-center justify-between gap-10 pb-4 border-b border-[#1a1219]'>
                                <h3 className='text-xl text-[#0f0200] font-archivo font-bold capitalize'>shopping cart</h3>
                                <h4 className='text-xl text-[#0f0200] font-bold font-archivo capitalize'>({cartItems > 9 ? cartItems?.length : '0' + cartItems?.length})</h4>
                            </div>

                            <div className="grid grid-cols-4 gap-8 pb-4 border-b border-[#1a1219]'>">
                                <h4 className='text-center text-lg text-[#787878] font-archivo font-medium capitalize'>product details</h4>
                                <h4 className='text-center text-lg text-[#787878] font-archivo font-medium capitalize'>price</h4>
                                <h4 className='text-center text-lg text-[#787878] font-archivo font-medium capitalize'>quantity</h4>
                                <h4 className='text-center text-lg text-[#787878] font-archivo font-medium capitalize'>total</h4>
                            </div>

                            <div className="grid grid-cols-1 gap-8 w-full">
                                {
                                    cartItems?.map((cartItem, index) => (
                                        <CartItem
                                            key={index}
                                            cartItem={cartItem}
                                            onIncrease={() => handleQuantityChange(index, 'increase')}
                                            onDecrease={() => handleQuantityChange(index, 'decrease')}
                                            onRemoveItem={() => handleRemoveItem(index)}

                                        />
                                    ))
                                }
                            </div>

                            <div>
                                <Link to={'/shop'} className='flex items-center gap-3 text-xl text-[#683292] font-archivo font-bold capitalize' ><GoArrowLeft /> continue shopping</Link>
                            </div>
                        </div>

                        <OrderSummary cartItems={cartItems} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;