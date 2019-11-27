import React from 'react';
import './style.scss';
import image from './hi.gif';

const Welcome = () => (
    <div className="welcome">
        <img src={image} alt="welcome" />
    </div>
);

export default Welcome;