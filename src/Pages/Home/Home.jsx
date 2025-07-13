import React from 'react';
import Banner from '../../Components/Banner/Banner';
import OurPopular from '../../Components/OurPopular/OurPopular';
import OurGuilt from '../../Components/OurGuilt/OurGuilt';
import TimeOffer from '../../Components/TimeOffer/TimeOffer';

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

        </div>
    );
};

export default Home;