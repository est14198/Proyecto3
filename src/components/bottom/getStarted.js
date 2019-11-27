/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Footer from './footer';
import './style.scss';

const GetStarted = () => (
    <div className="bottom">
        <div className="txt">
            Start using the world's #1 language learning tool now, for free.
        </div>
        <button type="button" className="btn">Get Started</button>
        <Footer />
    </div>
);

export default GetStarted;