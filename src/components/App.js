import React from 'react';
import Banner from './banner/banner';
import './App.scss';
import AboutMe from './about_me/about_me';
import Welcome from './welcome/welcome';
import Works from './works/works';
import Interests from './interests/insterests';

const App = () => (
    <div>
        <Banner />
        <Welcome />
        <AboutMe />
        <Works />
        <Interests />
    </div>
);

export default App;