/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './style.scss';
import image from './computer.gif';

const Works = () => (
    <div>
        <div className="projects">
            【p】【r】【o】【j】【e】【c】【t】【s】
        </div>
        <div className="centerabout1">
            <div className="text_about1">
                C S S - O N L Y: <a href="http://msdeus.site/14198/Laboratorio4/luna.html"><i className="material-icons">brightness_3</i>l u n a<i className="material-icons">brightness_3</i>f r o m<i className="material-icons">brightness_3</i>s a i l o r<i className="material-icons">brightness_3</i>m o o n<i className="material-icons">brightness_3</i></a><br />
                R E A C T: <a href="http://msdeus.site/14198/lab06/lab06.html"><i className="material-icons">brightness_3</i>a<i className="material-icons">brightness_3</i>m e m o r y<i className="material-icons">brightness_3</i>g a m e<i className="material-icons">brightness_3</i></a><br />
                R E A C T: <a href="https://msdeus.site/14198/proyectto1/index.html"><i className="material-icons">brightness_3</i>d u o l i n g o ' s<i className="material-icons">brightness_3</i>w e b s i t e<i className="material-icons">brightness_3</i>r e p l i c a<i className="material-icons">brightness_3</i></a><br />
                S T O R Y B O O K: <a href="https://msdeus.site/14198/lab09/index.html?path=/story/sign-in-button--on-click"><i className="material-icons">brightness_3</i>c o m p o n e n t s<i className="material-icons">brightness_3</i>v i s u a l<i className="material-icons">brightness_3</i>t e s t i n g<i className="material-icons">brightness_3</i></a><br />
                C U R R E N T - J O B: <a href="http://18.221.2.31/"><i className="material-icons">brightness_3</i>a d m i n<i className="material-icons">brightness_3</i>p o r t a l<i className="material-icons">brightness_3</i>@ S E P R O S E<i className="material-icons">brightness_3</i></a><br />
            </div>
            <img src={image} alt="aboutme"/>
        </div>
        
    </div>
    
);

export default Works;