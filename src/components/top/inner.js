/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './style.scss';
import image from './top_img.png';

const Top = () => (
    <div className="top">
        <div className="first">
            <p className="top_title">
                Bring the world's most popular language learning platform to your classroom.
            </p>
            <button type="button" className="btn1">Get Started</button>
            <button type="button" className="btn2">Need Help?</button>
        </div>
        <img className="img_top" src={image} alt="top info"/>
    </div>
);

export default Top;