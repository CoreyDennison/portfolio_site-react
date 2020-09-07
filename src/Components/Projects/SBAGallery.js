import React from "react";
import Fade from "react-reveal/Fade";
import { SRLWrapper } from "simple-react-lightbox";
import './gallery.css'

    function SBAImages() {
        document.title='Spotify API battle';
    return (
        <Fade>
        <div id="projectStyle">
            <p>For this project, I was tasked with developing and app with Node JS which compared two artists 
            of the user's choosing and judged them on specific criteria, such as the popularity, followers, number of songs,
            and so on. This information was located on either a local JSON file or from the Spotify API using a fetch 
            protocol. I decided to access the information from the JSON file. I then uploaded to the cloud platform 
            service provided by Heroku, which was able to host the app on one of its external servers.</p>

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
                <a href="https://github.com/CoreyDennison/codingproject2018">Source code on GitHub.</a>
                <a href="https://coreydennison.wordpress.com/2019/01/14/artist-battle-app/">Learn more at my WordPress blog post on this project.</a>
                <a href="https://artistbattleapp.herokuapp.com/">Launch this project with Heroku.</a>
                <a href="https://github.com/CoreyDennison/api_battle">Renewed verison using fetch API source code.</a>
                <a href="https://coreydennison.wordpress.com/2019/12/05/artist-battle-app-take-two/">Learn more at my WordPress blog post on renewed version.</a>
                <a href="https://apibattle.herokuapp.com/">Launch renewed version of the app with Heroku.</a>
            </div>
            </SRLWrapper> 
        </div>
        </Fade>
    );
}

export default SBAImages;