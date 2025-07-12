import React from 'react';
import Banner from '../../Components/Banner/Banner';
import OurPopular from '../../Components/OurPopular/OurPopular';

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

        </div>
    );
};

export default Home;