import React from 'react';
import './Education.css';
import education from '../assets/graduation-cap.png';

const educationData = [
    {
        id: "1",
        schoolName: "Narayana Engineering College, Gudur",
        degree: "Bachelor of Technology - BTech, Electronics and Communications Engineering",
        startDate: "Jun 2018",
        endDate: "Jun 2022",
        skills: "C, Python",
    },

];

const Education = () => {

    const preventContextMenu = (e) => {
        e.preventDefault();
    }


    const educationItems = educationData.map((item) => (
        <div key={item.id} className="education-item">
            <div className="school-name">
                <b style={{fontSize:'16px'}}>{item.schoolName}</b>
            </div>
            <div className="degree">
                {item.degree}
            </div>
            <div className="date-range">
                {item.startDate} - {item.endDate}
            </div>
            <div className="location">
                {item.skills}
            </div>
        </div>
    ));

    return (
        <div className="education-container">
            <img src={education} alt="Education" draggable="false" onContextMenu={preventContextMenu} />
            <h3>Education</h3>
            {educationItems}
        </div>
    );
};

export default Education;
