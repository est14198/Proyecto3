import React from 'react';
import Banner from './banner/banner';
import './App.scss';
import AboutMe from './about_me/about_me';
import Welcome from './welcome/welcome';

const App = () => (
    <div>
        <Banner />
        <Welcome />
        <AboutMe />
    </div>
);

export default App;