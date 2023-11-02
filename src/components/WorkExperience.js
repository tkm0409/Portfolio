import React from 'react';
import './WorkExperience.css';
import hexaware from '../assets/hexaware.png';
import wipro from '../assets/Wipro-logo.png';
import experience from '../assets/experience.png';


const WorkExperience = () => {

    const preventContextMenu = (e) => {
        e.preventDefault();
    }


    const workExperience = [
        {
            id: 1,
            companyName: 'Hexaware Technologies',
            logoUrl: hexaware, // Update with the actual logo URL
            jobPositions: [

                {
                    title: 'Associate Software Engineer',
                    startDate: 'May 2022',
                    endDate: 'Sep 2022',
                    location: 'Chennai, Tamil Nadu, India',
                    skills: ['Automation Anywhere', 'pytest', 'fastAPI', 'Python'],
                },
                {
                    title: 'Premier Graduate Engineer Trainee',
                    startDate: 'Jun 2022',
                    endDate: 'Sep 2022',
                    location: 'Chennai, Tamil Nadu, India',
                    skills: [
                        'Spring Framework',
                        'HTML5',
                        'Full-Stack Development',
                        'Application Development',
                        'React.js',
                        'ASP.NET',
                        'ASP.NET MVC',
                        'ASP.NET Web API',
                        'ASP.NET Core',
                        'C#',
                        'Shell Scripting',
                        'Postman API',
                        'Microsoft SQL Server',
                        'PL/SQL',
                        'Enterprise JavaBeans (EJB)',
                        'Java Database Connectivity (JDBC)',
                        'Angular',
                        'Angular Command Line Interface (CLI)',
                        'TypeScript',
                        'Spring MVC',
                        'Spring Boot',
                        'Spring Security',
                        'Spring Cloud',
                        'JPQL',
                        'Java',
                        'Cascading Style Sheets (CSS)',
                        'HTML',
                        'MySQL',
                    ],

                },

            ],
        },
        {
            id: 2,
            companyName: 'Wipro',
            logoUrl: wipro, // Update with the actual logo URL
            jobPositions: [
                {
                    title: 'Intern',
                    startDate: 'Mar 2022',
                    endDate: 'Jun 2022',
                    location: 'Bangalore, Karnataka, India',
                    skills: ['Java', 'Selenium Testing'],
                },

            ],
        },
    ];

    return (
        <div className="work-experience-container">
            <img src={experience} alt="Work Experience" draggable="false" onContextMenu={preventContextMenu} />
            <h3>Work Experience</h3>
            {workExperience.map((company) => (
                <div key={company.id} className="work-experience-item">
                    <div className='logo-side-name'>
                        <div className="company-logo">
                            <img src={company.logoUrl} alt={`${company.companyName} Logo`} />
                        </div>
                        <div className="company-name">{company.companyName}</div>
                    </div>
                    {company.jobPositions.map((position, index) => (
                        <div key={index} className="job-position">
                            <div className="title">
                                {position.title}
                            </div>
                            <div className="date-range">
                                {position.startDate} - {position.endDate}
                            </div>
                            <div className="location">
                                {position.location}
                            </div>
                            <div className="work-skills">
                                <span className="work-skills-label">Skills:</span>
                                {position.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="work-skill-item">
                                        {skill}
                                        {skillIndex < position.skills.length - 1 && '  ·  '}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default WorkExperience;
