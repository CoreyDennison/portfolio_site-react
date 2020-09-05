import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJsSquare, faPhp, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faUserCog, faMobileAlt, faReply, faCompress } from '@fortawesome/free-solid-svg-icons';

import './skills.css';

class Skills extends Component {

    render(){
        return(
            <div id="skills">
                <Fade>
                    <h2>What I'm good at ...</h2>
                </Fade>

                
                <div id="skills_con">
                    <Bounce left>
                        <ul>
                            <li><span><FontAwesomeIcon icon={faHtml5} style={{ width: 30, height: 30}}/></span>HTML</li>
                            <li><span><FontAwesomeIcon icon={faCss3} style={{ width: 20, height: 30}}/></span>CSS</li>
                            <li><span><FontAwesomeIcon icon={faJsSquare} style={{ width: 30, height: 30}}/></span>JavaScript</li>
                            <li><span><FontAwesomeIcon icon={faReact} style={{ width: 30, height: 30}}/></span>React</li>
                            <li><span><FontAwesomeIcon icon={faNode} style={{ width: 40, height: 40}}/></span><p>Node</p></li>
                            <li><span><FontAwesomeIcon icon={faPhp} style={{ width: 30, height: 30}}/></span>PHP</li>
                            <li><span><FontAwesomeIcon icon={faDatabase} style={{ width: 30, height: 30}}/></span>SQL</li>
                            <li><span><FontAwesomeIcon icon={faUserCog} style={{ width: 30, height: 30}}/></span>UX / UI Design</li>
                            <li class="move"><span><FontAwesomeIcon icon={faReply} style={{ width: 30, height: 30}}/></span>API Integration</li>
                            <li class="move"><span><FontAwesomeIcon icon={faCompress} style={{ width: 30, height: 30}}/></span>Responsive Web Design</li>
                            <li class="move"><span><FontAwesomeIcon icon={faMobileAlt} style={{ width: 30, height: 30}}/></span>Mobile App Prototyping</li>
                        </ul>
                    </Bounce>
                </div>
                    

                <Fade>
                    <div id="edu">
                        <h2>Education</h2>
                        <div id="itt">
                            <h3>Institute Of Technology Tralee <span>(2015 - 2017)</span></h3>
                            <h4>Dromthacker, Tralee, Co. Kerry.</h4>
                            <ul>
                                <li>Studied a three-year Computing with Software Development course (NFQ Level 7) for two years.</li>
                                <li>Studied Java, HTML, CSS, PHP, and Adobe Photoshop.</li>
                                <li>Mentored Java Programming to First Year students as part of my Second Year of the course.</li>
                            </ul>
                        </div>
                        <div id="did">
                            <h3>Dublin Institute Of Design <span>(2017-2019)</span></h3>
                            <h4>45 Kildare Street, Dublin 2, Dublin City.</h4>
                            <ul>
                                <li>Part-Time Web Development as a two-year course (Higher National Diploma NFQ Level 6).</li>
                                <li>Studied HTML, CSS, JQuery, JavaScript, UX & UI Design, Node JS, React, API Integration, Responsive Web Design, Mobile App Prototyping.</li>
                                <li>Additionally studied Digital Marketing, research, and Graphic Design.</li>
                            </ul>
                        </div>
                    </div>
                </Fade>
            </div>

        )
    }
}

export default Skills;