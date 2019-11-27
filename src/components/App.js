import React from 'react';
import Banner from './banner/banner';
import './App.scss';
import AboutMe from './about_me/about_me';
import Welcome from './welcome/welcome';
import Works from './works/works';
import Interests from './interests/insterests';
import Contact from './contact/contact';

const App = () => (
    <div>
        <Banner />
        <Welcome />
        <AboutMe />
        <Works />
        <Interests />
        <Contact />
    </div>
);

export default App;