import React from "react";
import Fade from "react-reveal/Fade";
import { SRLWrapper } from "simple-react-lightbox";
import './gallery.css'

    function MSAImages() {
        document.title='Movie Search API';
    return (
        
        <Fade>
        <div id="projectStyle">
            <p>This college project required me to create a single page application through the React JS 
            framework that would fetch information from an API of my own choosing and display the data in an orderly 
            fashion. I chose to access a movie database to fetch the information, and to then display it and feature a 
            header photo, the title of the movie, the year of the movie's release and its rating.</p>
            
            <SRLWrapper>
                <div id="gallery">
                    <a /*Main Image*/href="./images/movie/wf.jpg" data-attribute="SRL">
                        <img /*Thumbnail*/src="./images/movie/wf_s.jpg" alt="Movie Search App wireframe."/>
                    </a>
                    <a href="./images/movie/display_f.jpg" data-attribute="SRL">
                        <img src="./images/movie/display.jpg" alt="Movie Search App initial appearance." />
                    </a>
                    <a href="./images/movie/search.jpg" data-attribute="SRL">
                        <img src="./images/movie/search_s.jpg" alt="Movie Search App search results." />
                    </a>
                </div>

                <div id="links">
                    <a href="https://github.com/CoreyDennison/React_Project" target="_blank">Source code on GitHub.</a>
                    <a href="https://coreydennison.wordpress.com/2019/03/17/react-s-p-a/" target="_blank">Learn more at my WordPress blog post on this project.</a>
                    <a href="https://moviesearchapp-reactjs.herokuapp.com/" target="_blank">Launch this project with Heroku.</a>
                </div>
            </SRLWrapper> 
        </div>
        </Fade>
    );
}

export default MSAImages;