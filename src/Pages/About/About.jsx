import React from 'react';
import Broadcom from '../../Components/Broadcom/Broadcom';
import OurJourney from '../../Components/OurJourney/OurJourney';
import OurMission from '../../Components/OurMission/OurMission';
import OurStatistics from '../../Components/OurStatistics/OurStatistics';
import OurTeamMember from '../../Components/OurTeamMember/OurTeamMember';
import Newsletter from '../../Components/Newsletter/Newsletter';

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

            {/* our mission component  */}
            <div>
                <OurMission />
            </div>

            {/* our statistics component  */}
            <div>
                <OurStatistics />
            </div>

            {/* our team member component  */}
            <div>
                <OurTeamMember />
            </div>

            {/* our newsletter component  */}
            <div>
                <Newsletter />
            </div>

        </div>
    );
};

export default About;