import React from 'react';
import './Contact.css';
import 'font-awesome/css/font-awesome.min.css';


const Contact = () => {
  return (
    <>
      <h2 style={{textAlign:'center'}}>Contact Information</h2>

      <div className="contact-container">
        <ul className="contact-info">
          <li className="contact-item">
            <i className="fa fa-linkedin contact-icon"></i>
            <a href="https://www.linkedin.com/in/tharunkumar0409" target='_blank'>LinkedIn</a>
          </li>
          <li className="contact-item">
            <i className="fa fa-github contact-icon"></i>
            <a href="https://github.com/tkm0409" target='_blank'>GitHub</a>
          </li>
          <li className="contact-item">
            <i className="fa fa-envelope contact-icon"></i>
            <a href='mailto:m.tharunkumar0409@gmail.com'>m.tharunkumar0409@gmail.com</a>
          </li>
          <li className="contact-item" style={{cursor:'copy'}}>
            <i className="fa fa-mobile contact-icon"></i>
            +91 799 519 5537
          </li>
          <li className="contact-item" style={{cursor:'copy'}}>
            <i className="fa fa-location-arrow contact-icon"></i>
            Venkannapalem, Nellore, Andhra Pradesh - 524405
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
