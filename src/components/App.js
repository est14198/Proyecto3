import React from 'react';
import GetStarted from './bottom/getStarted';
import DuoInfo from './duolingo_info/info';
import SchoolsInfo from './schools_info/info';
import Top from './top/inner';
import Banner from './banner/banner';

const App = () => (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Banner />
        <Top />
        <SchoolsInfo />
        <DuoInfo />
        <GetStarted />
    </div>
);

export default App;