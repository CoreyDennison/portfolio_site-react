import React from "react";
import Fade from "react-reveal/Fade";
import { SRLWrapper } from "simple-react-lightbox";
import './gallery.css'

    function OTB2Images() {
    return (
        <Fade>
        <div id="projectStyle">
            <p>Once Over The Bump had been developed, I was then tasked with a new project which involved establishing a 
            marketing campaign for the app. For this, I analysed previous marketing campaigns with similar motivations to the Over The Bump 
            app, and review what they did and didn't find successful and implement that to my own. As well as this, I also came up with social 
            media campaigns for specifically chosen social media sites and when would be a suitable date to roll out my campaign depending on 
            relevant data I had researched. I used the task managment software MeisterTask and its corresponding mind mapping software 
            MindMeister to organise my work, come up with ideas and keep record of my work. From the knowledge I gathered for the app's 
            marketing campaign, I was then tasked with creating Facebook advertisements for a course at my college, and then recording and 
            presenting the results and my findings.</p>
            
            <SRLWrapper>
            <div id="gallery">
            <a href="images/otb/rollout.jpg" data-attribute="SRL">
                    <img src="images/otb/rollout_s.jpg" alt="Over The Bump App Ad rollouts"/>
                </a>
                <a href="images/otb/facebook_ad.jpg" data-attribute="SRL">
                    <img src="images/otb/ad_s.jpg" alt="Over The Bump Facebook Ad template"/>
                </a>
                <a href="images/otb/insta_ad.jpg" data-attribute="SRL" className="hidden" >
                    <img src="/images/otb/insta_ad.jpg" alt="Over The Bump Instagram Ad template"/>
                </a>
                <a href="images/otb/ad1.jpg" data-attribute="SRL">
                    <img src="/images/otb/fad_s.jpg" alt="College Course Facebook Ad 1" />
                </a>
                <a href="images/otb/ad2.jpg" data-attribute="SRL" className="hidden" >
                    <img src="/images/otb/ad2.jpg" alt="College Course Facebook Ad 2" />
                </a>
                <a href="images/otb/ad3.jpg" data-attribute="SRL" className="hidden" >
                    <img src="/images/otb/ad3.jpg" alt="College Course Facebook Ad 3" />
                </a>
                <a href="images/otb/ad3Replace.jpg" data-attribute="SRL" className="hidden" >
                    <img src="/images/otb/ad3Replace.jpg" alt="College Course Facebook Ad 3 replacement" />
                </a>
                <a href="images/otb/mo.jpg" data-attribute="SRL">
                    <img src="images/otb/mo_s.jpg" alt="College Course Ad Campain Marketing Objective"/>
                </a>
                <a href="images/otb/overall_engagement.jpg" data-attribute="SRL" className="hidden" >
                    <img src="images/otb/overall_engagement.jpg" alt="Overall user interaction with College Course Facebook As Campain"/>
                </a>
            </div>

            <div id="links">
                    <a href="https://coreydennison.wordpress.com/2019/03/31/app-design-and-prototyping">Wordpress blog post on the Over The Bump app design and prototyping process.</a>
                    <a href="https://coreydennison.wordpress.com/2019/04/11/app-marketing-research/">Wordpress blog post on the app marketing research.</a>
                    <a href="https://coreydennison.wordpress.com/2019/05/17/social-media-campaign/">Wordpress blog post on Facebook marketing research.</a>
                    <a href="https://projects.invisionapp.com/share/7AU5KFJEURN#/screens">Over The Bump InVision Prototype (zoom web browser page out).</a>
            </div>
            </SRLWrapper> 
        </div>
        </Fade>
    );
}

export default OTB2Images;