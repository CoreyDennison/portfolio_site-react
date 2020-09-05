import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import './gallery.css'

    function OTB2Images() {
    return (
        
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

            <div id="links">
                    <a href="https://coreydennison.wordpress.com/2019/03/31/app-design-and-prototyping">Wordpress blog post on the Over The Bump app design and prototyping process.</a>
                    <a href="https://coreydennison.wordpress.com/2019/04/11/app-marketing-research/">Wordpress blog post on the app marketing research.</a>
                    <a href="https://coreydennison.wordpress.com/2019/05/17/social-media-campaign/">Wordpress blog post on Facebook marketing research.</a>
                    <a href="https://projects.invisionapp.com/share/7AU5KFJEURN#/screens">Over The Bump InVision Prototype (zoom web browser page out).</a>
            </div>
            </SRLWrapper> 
        </div>
    );
}

export default OTB2Images;