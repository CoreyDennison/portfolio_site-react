import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from'react-reveal/Bounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJsSquare, faPhp, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faUserCog, faMobileAlt, faReply, faCompress } from '@fortawesome/free-solid-svg-icons';

import './skills.css';

class Skills extends Component {

    render(){
        return(
            <div id="skills">
                <Slide left>
                    <h2>What I'm good at ...</h2>
                </Slide>

                
                <div id="skills_con">
                    <Bounce left>
                        <ul>
                            <li><span><FontAwesomeIcon icon={faHtml5} style={{ width: 30, height: 30}}/></span>HTML</li>
                            <li><span><FontAwesomeIcon icon={faCss3} style={{ width: 20, height: 30}}/></span>CSS</li>
                            <li><span><FontAwesomeIcon icon={faJsSquare} style={{ width: 30, height: 30}}/></span>JavaScript</li>
                            <li><span><FontAwesomeIcon icon={faReact} style={{ width: 30, height: 30}}/></span>React</li>
                            <li><span><FontAwesomeIcon icon={faNode} style={{ width: 40, height: 40}}/></span>Node</li>
                            <li><span><FontAwesomeIcon icon={faPhp} style={{ width: 30, height: 30}}/></span>PHP</li>
                            <li><span><FontAwesomeIcon icon={faDatabase} style={{ width: 30, height: 30}}/></span>SQL</li>
                            <li><span><FontAwesomeIcon icon={faUserCog} style={{ width: 30, height: 30}}/></span>UX / UI Design</li>
                            <li><span><FontAwesomeIcon icon={faReply} style={{ width: 30, height: 30}}/></span>API Integration</li>
                            <li><span><FontAwesomeIcon icon={faCompress} style={{ width: 30, height: 30}}/></span>Responsive Web Design</li>
                            <li><span><FontAwesomeIcon icon={faMobileAlt} style={{ width: 30, height: 30}}/></span>Mobile App Prototyping</li>
                        </ul>
                    </Bounce>
                </div>

            </div>
        )
    }
}

export default Skills;