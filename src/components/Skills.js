import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import img1 from '../assets/Cohesive-image.png';
import img2 from '../assets/Cohesive-image (1).png';
import img3 from '../assets/Cohesive-image (2).png';
import img4 from '../assets/Cohesive-image (3).png';


const SkillContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.alternate ? 'row-reverse' : 'row')};
  align-items: center;
  padding: 20px;
  transform: scale(0.68);
  transition: transform 0.3s ease; /* Add a smooth transition effect */
  &:hover {
    transform: scale(0.78); /* Add a scale effect on hover */
  }
`;

const SkillImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50px;
  transition: filter 0.3s ease; /* Add a smooth transition effect */
  &:hover {
    filter: brightness(80%); /* Add a brightness effect on hover */
  }
`;

const SkillInfo = styled.div`
  text-align: ${props => (props.alternate ? 'right' : 'left')};
  margin-${props => (props.alternate ? 'right' : 'left')}: 10%;
`;

const SkillName = styled.h3`
  font-size: 36px;
  margin: 0;
  transition: color 0.3s ease; /* Add a smooth transition effect */
  &:hover {
    color: #007bff; /* Change text color on hover */
  }
`;

const SkillDetails = styled.p`
  font-size: 24px;
  transition: opacity 0.3s ease; /* Add a smooth transition effect */
  &:hover {
    opacity: 0.7; /* Change opacity on hover */
  }
`;

const Skill = ({ name, details, image, alternate }) => {
  const [typedText, setTypedText] = useState('');
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const animateTextTyping = () => {
    const text = details;
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
  };

  const handleImageScroll = () => {
    const image = imageRef.current;
    if (image) {
      const rect = image.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        image.style.transform = 'translateX(0)';
      }
    }
  };

  useEffect(() => {
    animateTextTyping();

    window.addEventListener('scroll', handleImageScroll);
    return () => {
      window.removeEventListener('scroll', handleImageScroll);
    };
  }, []);

  return (
    <SkillContainer alternate={alternate}>
      <SkillImage ref={imageRef} src={image} alt={name} alternate={alternate} />
      <SkillInfo alternate={alternate}>
        <SkillName>{name}</SkillName>
        <SkillDetails ref={textRef}>{typedText}</SkillDetails>
      </SkillInfo>
    </SkillContainer>
  );
};

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      name: 'Microsoft Full Stack',
      details: 'ASP.NET Core Web API, SQL Server, React.js',
      image: img1
    },
    {
      id: 2,
      name: 'Java Full Stack',
      details: 'Java, Spring Boot, Spring MVC, MySQL, Angular',
      image: img2
    },
    {
      id: 3,
      name: 'Python Full Stack',
      details: 'Flask, FastAPI, PostgreSQL, React.js',
      image: img3
        },
    {
      id: 4,
      name: 'Version Control',
      details: 'Git',
      image: img4
    },
    // Add more skills as needed
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Skills</h1>
      {skillsData.map(skill => (
        <>
          <Skill
            key={skill.id}
            name={skill.name}
            details={skill.details}
            image={skill.image}
            alternate={skill.id % 2 === 0}
          />
          <hr />
        </>
      ))}
    </div>
  );
};

export default Skills;
