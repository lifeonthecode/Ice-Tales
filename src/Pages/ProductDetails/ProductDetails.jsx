import React from 'react';
import Broadcom from '../../Components/Broadcom/Broadcom';
import ProductDetailsCard from '../../Components/ProductDetailsCard/ProductDetailsCard';

const ProductDetails = () => {
    return (
        <div>
            {/* broadcom component  */}
            <div>
                <Broadcom page={'product details'} />
            </div>

            {/* product details card component */}
            <div>
                <ProductDetailsCard/>
            </div>
        </div>
    );
};

export default ProductDetails;