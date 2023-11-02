import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import './Header.css';
import image from '../image.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const preventContextMenu = (e) => {
    e.preventDefault();
}

  useEffect(() => {
    // Function to handle window resize and hide menu items on desktop
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    // Add a listener for the window resize event
    window.addEventListener('resize', handleResize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <nav className={menuOpen ? 'open' : ''}>
        <div className='menu-icon' onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
        <div className='logo'>
          <img src={image} alt="Logo" draggable="false" onContextMenu={preventContextMenu}/>
          <span>Portfolio</span>
        </div>
        <ul>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
