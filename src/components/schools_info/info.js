import React from 'react';
import './style.scss';
import image from'./duo_schools.png';

const SchoolsInfo = () => (
    <div className="sch_info">
        <img className="img_schools" src={image} alt="schools info"/>
        <div className="half">
            <p className="sch_title">
                You can now track progress on Duolingo!
            </p>
            <p className="sch_text">
                Many teachers and even entire governments around the world already view Duolingo as the perfect blended learning companion for their classrooms. Duolingo lessons give each student personalized feedback and practice, preparing them to get the most out of classroom instruction.
            </p>
            <p className="sch_text2">
                Now teachers can track all their students in one place through our brand new dashboard.
            </p>
        </div>
    </div>
);

export default SchoolsInfo;