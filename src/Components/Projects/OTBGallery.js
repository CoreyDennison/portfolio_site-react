import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import './gallery.css'

    function OTBImages() {
        document.title='Over The Bump Mobile App';
    return (
        
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
                <a href="images/artist/abmm.jpg" data-attribute="SRL">
                    <img src="images/artist/abmm_s.jpg" alt="Spotify Battle App mindmap" />
                </a>
                <a href="images/artist/app_wireframe.png" data-attribute="SRL">
                    <img src="/images/artist/app_wireframe_s.jpg" alt="App wireframe" />
                </a>
                <a href="images/artist/login.png" data-attribute="SRL">
                    <img src="/images/artist/login_s.jpg" alt="App login" />
                </a>
                <a href="images/artist/battle3.png" data-attribute="SRL">
                    <img src="/images/artist/artist_battle.jpg" alt="Spotify Battle App Demo" />
                </a>
            </div>

            </SRLWrapper> 
        </div>
    );
}

export default OTBImages;