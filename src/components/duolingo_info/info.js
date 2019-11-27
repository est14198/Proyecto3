import React from 'react';
import './style.scss';

const DuoInfo = () => (
    <div className="duo_info">
        <p>
            Over 200 million people around the world use Duolingo to help them learn languages. The fun, game-like<br/><br /> lessons keep students motivated and excited about language. Best of all, as studies by the City University of <br /><br />New York and others have shown - it really works!
        </p>
        <ul className="listul">
            <li className="listil">
                <a href="https://www.duolingo.com/info" className="link"><i className="material-icons">play_circle_outline</i> Watch video (1 min) </a>
            </li>
            <li className="listil">
                <a href="https://www.duolingo.com/info" className="link2"><i className="material-icons">receipt</i> View effectiveness study</a>
            </li>
        </ul>
    </div>
);

export default DuoInfo;