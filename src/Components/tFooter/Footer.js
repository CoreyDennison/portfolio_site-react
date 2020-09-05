import React, { Component } from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {

    render(){
        return(
            <div id="footer">
                <ul>
                    <li><i><FontAwesomeIcon icon={faPhoneAlt}/></i><a href="tel: 0892525476">(+353) 089 2525476</a></li>
                    <li><i><FontAwesomeIcon icon={faEnvelope}/></i><a href="mailto:cmgdennison@gmail.com">cmgdennison@gmail.com</a></li>
                    <li><i><FontAwesomeIcon icon={faMapMarkerAlt}/></i>Kenmare, Co. Kerry, Ireland</li>
                    <li><i><FontAwesomeIcon icon={faLinkedin}/></i><a href="https://www.linkedin.com/in/corey-dennison-1b30b410a/">My LinkedIn Profile</a></li>
                </ul>
            </div>
        )
    }
}

export default Footer;