import React from "react";
import Fade from "react-reveal/Fade";
import { SRLWrapper } from "simple-react-lightbox";
import './gallery.css'

    function OTBImages() {
        document.title='Over The Bump Mobile App';
    return (
        
        <Fade>
        <div id="projectStyle">
            <p>This project involved me to come up with an idea for a unique mobile app that serves a 
            specific need or problem. Following that, I was then required to develop user personas, competitos analysis, 
            carry our user interviews and surveys, sketches, userflows and wireflows, and wireframes for the app. Once 
            that had been completed I began the design process for the app, giving it the name "Over The Bump", and 
            evaluating inpirations for its design, the app's logo, the apps colour scheme, typography and imagery used, 
            and eventually building a minimal viable product of the app by creating an interactive prototype of the app 
            using InVision and carrying out user testing in order to recieve feedback. Finally, I created a specifications 
            document detailing the whole process from beginning to end, listing my findings and decisions.</p>
            
            <SRLWrapper>
            <div id="gallery">
                <a href="images/otb/otb.jpg" data-attribute="SRL">
                    <img src="images/otb/otb_s.jpg" alt="Over The Bump Logo"/>
                </a>
                <a href="images/otb/brigid_empathy.jpg" data-attribute="SRL">
                    <img src="/images/otb/empathy_s.jpg" alt="Brigid Crowley user empathy diagram" />
                </a>
                <a href="images/otb/brigid_up.jpg" data-attribute="SRL" className="hidden" >
                    <img src="/images/otb/brigid_up.jpg" alt="Brigid Crowley user persona" />
                </a>
                <a href="images/otb/sd1_3_22.jpg" data-attribute="SRL">
                    <img src="/images/otb/sd_s.jpg" alt="Specification Document Page 3 of 22" />
                </a>
                <a href="images/otb/sd2_4_22.jpg" data-attribute="SRL" className="hidden" >
                    <img src="/images/otb/sd2_4_22.jpg" alt="Specification Document Page 4 of 22" />
                </a>
                <a href="images/otb/sd3_5_22.jpg" data-attribute="SRL" className="hidden" >
                    <img src="/images/otb/sd3_5_22.jpg" alt="Specification Document Page 5 of 22" />
                </a>
                <a href="images/otb/home.jpg" data-attribute="SRL">
                    <img src="/images/otb/home_s.jpg" alt="Specification Document Page 5 of 22" />
                </a>
                <a href="images/otb/records.jpg" data-attribute="SRL" className="hidden" >
                    <img src="/images/otb/records.jpg" alt="Specification Document Page 5 of 22" />
                </a>
                <a href="images/otb/calendar.jpg" data-attribute="SRL" className="hidden" >
                    <img src="/images/otb/calendar.jpg" alt="Specification Document Page 5 of 22" />
                </a>
            </div>
            </SRLWrapper> 
        </div>
        </Fade>
    );
}

export default OTBImages;