import React, { Component } from 'react';
import './header.css';

class Header extends Component {

    render(){

        window.onscroll = function() {fadeScroll1()};

        function fadeScroll1() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("aboutMe").style="opacity: 1; transition: 1.5s;";
            } 
        }
        
        return(
            
            <div id="site_header">
                <div id="header_con">
                    <h5 className="header1">Hi there,</h5>
                    <h5 className="header2">My name's Corey.</h5>
                    <h5 className="header3">Nice to meet you!</h5>
                </div>

                <img src="./images/apps_greybg.jpg" alt="projects on devices."/>

                <div id="aboutMe">
                    <h2>About Me</h2>
                    <p>I am Corey Dennison, a determined, ambitious and positive person with a passion for the I.T, computing and 
                        development sectors. I have four years of Third Level Study in these areas and am eager to gain experience 
                        in the web development field. I'm willing to take on a multitude of tasks to further expand and improve on 
                        my knowledge.</p>
                </div>
            </div>
        )
    }
}

export default Header;
