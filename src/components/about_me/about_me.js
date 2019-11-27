import React from 'react';
import './style.scss';
import image from './aboutme.gif';

const AboutMe = () => (
    <div>
        <div className="aboutme">
            【a】【b】【o】【u】【t】 【m】【e】
        </div>
        <div className="centerabout">
            <img src={image} alt="aboutme"/>
            <div className="text_about">
                N A M E: <i className="material-icons">brightness_3</i>m a r i a<i className="material-icons">brightness_3</i>f e r n a n d a<i className="material-icons">brightness_3</i>e s t r a d a<i className="material-icons">brightness_3</i><br />
                D O B: <i className="material-icons">brightness_3</i>2 5<i className="material-icons">brightness_3</i>0 9<i className="material-icons">brightness_3</i>1 9 9 5<i className="material-icons">brightness_3</i><br />
                N A T I O N A L I T Y: <i className="material-icons">brightness_3</i>g u a t e m a l a n <i className="material-icons">brightness_3</i><br />
                L A N G U A G E S: <i className="material-icons">brightness_3</i>s p a n i s h<i className="material-icons">brightness_3</i>e n g l i s h<i className="material-icons">brightness_3</i>f r e n c h<i className="material-icons">brightness_3</i><br />
                S T U D E N T - A T: <i className="material-icons">brightness_3</i>U V G<i className="material-icons">brightness_3</i><br />
                O C C U P A T I O N: <i className="material-icons">brightness_3</i>f r e e l a n c e r<i className="material-icons">brightness_3</i>
            </div>
        </div>
        
    </div>
    
);

export default AboutMe;