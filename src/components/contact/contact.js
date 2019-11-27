import React from 'react';
import './style.scss';
import image from './crystal.gif';

const AboutMe = () => (
    <div>
        <div className="contact">
            【c】【o】【n】【t】【a】【c】【t】 【m】【e】
        </div>
        <div className="centerabout3">
            <div className="text_about3">
                E - M A I L 1: <i className="material-icons">brightness_3</i>e s t 1 4 1 9 8 @ u v g . e d u . g t<i className="material-icons">brightness_3</i><br />
                E - M A I L 2: <i className="material-icons">brightness_3</i>m x r i x . 8 @ g m a i l . c o m<i className="material-icons">brightness_3</i><br />
                P H O N E #: <i className="material-icons">brightness_3</i>3 5 2 4 - 5 2 8 3<i className="material-icons">brightness_3</i><br />
            </div>
            <img src={image} alt="aboutme"/>
        </div>
        
    </div>
    
);

export default AboutMe;