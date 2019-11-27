import React from 'react';
import './style.scss';
import image from './logo.png';

const Banner = () => (
    <div className="banner">
        <img className="img_banner" src={image} alt="logo" />
        <div className="to_right">
            <button type="button" className="btn4">Share</button>
            <button type="button" className="btn3">Login</button>
        </div>
    </div>
);

export default Banner;