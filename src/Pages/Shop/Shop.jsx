import React from 'react';
import Broadcom from './../../Components/Broadcom/Broadcom';
import ProductFilter from '../../Components/ProductFilter/ProductFilter';

const Shop = () => {
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

                        <ProductFilter/>

                        {/* products wrapper  */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;