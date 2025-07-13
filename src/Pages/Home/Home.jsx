import React from 'react';
import Banner from '../../Components/Banner/Banner';
import OurPopular from '../../Components/OurPopular/OurPopular';
import OurGuilt from '../../Components/OurGuilt/OurGuilt';
import TimeOffer from '../../Components/TimeOffer/TimeOffer';
import BestIceCream from '../../Components/BestIceCreame/BestIceCream';
import HappyFans from '../../Components/HappyFans/HappyFans';
import Newsletter from '../../Components/Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            
            {/* banner component */}
            <div>
                <Banner/>
            </div>

            {/* our popular component */}
            <div>
                <OurPopular/>
            </div>

            {/* our guilt component */}
            <div>
                <OurGuilt/>
            </div>

            {/* our time offer component */}
            <div>
                <TimeOffer/>
            </div>

            {/* our best ice cream component */}
            <div>
                <BestIceCream/>
            </div>

            {/* our happy fans component */}
            <div>
                <HappyFans/>
            </div>

            {/* our happy fans component */}
            <div>
                <Newsletter/>
            </div>

        </div>
    );
};

export default Home;