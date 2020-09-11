import React from "react";
import Fade from "react-reveal/Fade";
// Import SRLWrapper
import { SRLWrapper } from "simple-react-lightbox";
import './gallery.css'

    function JOCImages() {
    document.title="Joy Of Chá";
    return (

        <Fade>
        <div id="projectStyle">
            <p>As part of my 1st Year at Dublin Institute of Design, I was tasked to locate a business of my chosing 
            in the Temple Bar district of Dublin City and rebrand their idenity with a logo and website of my own 
            design. This project required me to experiment with logos, colour schemes, layouts, and create wireframes 
            and mock-ups, as well as a vast amount of research on competitors and ways of promoting the business, 
            such as though SEOs, email campaigns, social media and advertising.</p>
        
            <SRLWrapper>
            <div id="gallery">
                <a href="./images/joyofcha/joc_b.jpg" data-attribute="SRL">
                    <img src="./images/joyofcha/joc_s.jpg" alt="Joy Of Chá logo" />
                </a>
                <a href="./images/joyofcha/sg1.jpg" data-attribute="SRL">
                    <img src="./images/joyofcha/joc_styleguide.jpg" alt="Style guide" />
                </a>
                <a href="./images/joyofcha/sg4.jpeg" data-attribute="SRL" className="hidden">
                    <img src="/images/joyofcha/sg4_s.jpg" alt="styleguide page 1" />
                </a>
                <a href="./images/joyofcha/logo_white.jpg" data-attribute="SRL">
                    <img src="./images/joyofcha/logo_white_s.jpg" alt="Alternative logo" />
                </a>
                <a href="./images/joyofcha/joc_site.jpg" data-attribute="SRL">
                    <img src="./images/joyofcha/joc_site_s.jpg" alt="Joy Of Chá Website" />
                </a>
            </div>

            <div id="links">
                <a href="https://github.com/CoreyDennison/theJoyOfCha" target="_blank" rel="noopener noreferrer">Source code on GitHub.</a>
            </div>
            </SRLWrapper> 

        </div>
        </Fade>



    );
}

export default JOCImages;