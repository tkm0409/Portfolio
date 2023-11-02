import React, { useState } from 'react';
import img1 from '../assets/Cohesive-image.png';
import img2 from '../assets/Cohesive-image (1).png';
import img3 from '../assets/Cohesive-image (2).png';
import img4 from '../assets/Cohesive-image (3).png';
import skills from '../assets/creative-thinking.png';
import "./Skills.css";

const skillsData = [
  {
    title: "Microsoft Full Stack",
    image: img1,
    subSkills: ["ASP.NET Core Web API", "SQL Server", "React.js"],
  },
  {
    title: "Java Full Stack",
    image: img2,
    subSkills: ["Java", "Spring Boot", "Spring MVC", "MySQL", "Angular"],
  },
  {
    title: "Python Full Stack",
    image: img3,
    subSkills: ["Flask", "FastAPI", "PostgreSQL", "React.js"],
  },
  {
    title: "Version Control",
    image: img4,
    subSkills: ["Git"],
  },
];

const Skills = () => {
  const [activeSkills, setActiveSkills] = useState(Array(skillsData.length).fill(false));

  const renderSubSkills = (subSkills) => {
    return subSkills.map((subSkill, index) => (
      <li key={index}>{subSkill}</li>
    ));
  };

  const handleSkillClick = (index) => {
    const updatedActiveSkills = [...activeSkills];
    updatedActiveSkills[index] = !updatedActiveSkills[index];
    setActiveSkills(updatedActiveSkills);
  };

  const preventContextMenu = (e) => {
    e.preventDefault();
  }

  const renderSkills = () => {
    return skillsData.map((skill, index) => (
      <div
        className={`skill ${activeSkills[index] ? "active" : ""}`}
        key={index}
        onClick={() => handleSkillClick(index)}
      >
        <div className="skill-container">
          <div className="skill-image">
            <img src={skill.image} alt={skill.title} draggable="false" onContextMenu={preventContextMenu} />
          </div>
          <h4 style={{ color: '#F79544' }}>{skill.title}</h4>
          <div className="skill-details">
            <ul className="subSkills">{renderSubSkills(skill.subSkills)}</ul>
          </div>
        </div>
      </div>
    ));
  };

  return <>
    <div className="skill-bar">
      <img src={skills} alt="Skills title image" draggable="false" onContextMenu={preventContextMenu} />
      <h3>Skills</h3>
    </div>
    <div className="skills">{renderSkills()}</div>
  </>;
};

export default Skills;