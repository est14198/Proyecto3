/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './style.scss';
import imagecat from './cat.gif';
import imagegym from './gym.gif';
import imagemovie from './movies.gif';

const Interests = () => (
    <div>
        <div className="interests">
            【i】【n】【t】【e】【r】【e】【s】【t】【s】
        </div>
        <div className="centercolumn">
            <div className="centerabout2">
                <img src={imagecat} alt="cat"/>
                <div className="text_about2">
                    <div style={{fontSize: '50px', fontWeight: 'bold'}}>
                        C A T S<br /> <br />
                    </div>
                    <i className="material-icons">brightness_3</i>just to give you an idea... I have 11 cats, and a cute <a href="https://www.instagram.com/chatosgatosgt/"><i className="material-icons">flash_on</i>instagram<i className="material-icons">flash_on</i></a>account of them<i className="material-icons">brightness_3</i>
                </div>
            </div>
            <div className="centerabout2">
                <div className="text_about2" style={{marginRight: '30px'}}>
                    <div style={{fontSize: '50px', fontWeight: 'bold'}}>
                        G Y M<br /> <br />
                    </div>
                    <i className="material-icons">brightness_3</i>because my attempts of losing 30pnds in 2hrs weren't working S M H<i className="material-icons">brightness_3</i>
                </div>
                <img src={imagegym} alt="gym"/>
            </div>
            <div className="centerabout2">
                <img src={imagemovie} alt="movies" style= {{marginBottom: '40px'}}/>
                <div className="text_about2">
                    <div style={{fontSize: '50px', fontWeight: 'bold'}}>
                        M O V I E S<br /> <br />
                    </div>
                    <i className="material-icons">keyboard_backspace</i><i className="material-icons">brightness_3</i>i can recognize a piece of art when i see it<i className="material-icons">brightness_3</i>
                </div>
            </div>
        </div>
    </div>
    
);

export default Interests;