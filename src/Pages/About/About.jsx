import React from 'react';
import Broadcom from '../../Components/Broadcom/Broadcom';
import OurJourney from '../../Components/OurJourney/OurJourney';

const About = () => {
    return (
        <div>


            {/* broadcom component  */}
            <div>
                <Broadcom page={'about us'} />
            </div>

            {/* our journey component  */}
            <div>
                <OurJourney />
            </div>

        </div>
    );
};

export default About;