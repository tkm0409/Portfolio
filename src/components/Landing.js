import React from 'react';
import landingImage from '../profile.png';
import './Landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faDesktop, faUser } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
    return (
        <section id="landing">
            <img src={landingImage} alt="Developer" />
            <div className="landing-text">
                <h1 className='developer-name'>Tharun Kumar Maddala</h1>
                <p className="developer-title">Microsoft Full-Stack Developer</p>
                <div className="description-container">
                    <p className="description">
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        Passionate about crafting efficient and scalable web applications using a wide range of Microsoft technologies. With over 1 year of hands-on experience, I have a strong foundation in developing end-to-end solutions that leverage .NET Core, SQL Server, and React.js.
                    </p>
                    <p className="description">
                        <FontAwesomeIcon icon={faCode} className="icon" />
                        My expertise includes designing and building robust .NET Core Web APIs, optimizing SQL databases, and creating dynamic user interfaces with React.js. I'm dedicated to delivering high-quality software solutions that meet both business requirements and user expectations.
                    </p>
                    <p className="description">
                        <FontAwesomeIcon icon={faDatabase} className="icon" />
                        Let's collaborate and bring your next project to life!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Landing;
