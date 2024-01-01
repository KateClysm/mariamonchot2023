import './contact.scss';
import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGit } from "react-icons/fa6";
import '../../animations/bounce.scss';
import { RevealUp } from '../../animations/Reveal';

const Contact: React.FC = () => {
    return (
      <RevealUp>
        <section className="section-contact">
        <svg
          id="wave"
          viewBox="0 0 1440 260"
          version="1.1"
          className='wave-contact'
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path
            fill="#080808"
            d="M0,130L48,117C96,104,192,78,288,95.3C384,113,480,173,576,186.3C672,199,768,165,864,130C960,95,1056,61,1152,52C1248,43,1344,61,1440,78C1536,95,1632,113,1728,117C1824,121,1920,113,2016,104C2112,95,2208,87,2304,73.7C2400,61,2496,43,2592,47.7C2688,52,2784,78,2880,82.3C2976,87,3072,69,3168,65C3264,61,3360,69,3456,91C3552,113,3648,147,3744,156C3840,165,3936,147,4032,121.3C4128,95,4224,61,4320,56.3C4416,52,4512,78,4608,91C4704,104,4800,104,4896,108.3C4992,113,5088,121,5184,121.3C5280,121,5376,113,5472,99.7C5568,87,5664,69,5760,82.3C5856,95,5952,139,6048,138.7C6144,139,6240,95,6336,78C6432,61,6528,69,6624,65C6720,61,6816,43,6864,34.7L6912,26L6912,260L6864,260C6816,260,6720,260,6624,260C6528,260,6432,260,6336,260C6240,260,6144,260,6048,260C5952,260,5856,260,5760,260C5664,260,5568,260,5472,260C5376,260,5280,260,5184,260C5088,260,4992,260,4896,260C4800,260,4704,260,4608,260C4512,260,4416,260,4320,260C4224,260,4128,260,4032,260C3936,260,3840,260,3744,260C3648,260,3552,260,3456,260C3360,260,3264,260,3168,260C3072,260,2976,260,2880,260C2784,260,2688,260,2592,260C2496,260,2400,260,2304,260C2208,260,2112,260,2016,260C1920,260,1824,260,1728,260C1632,260,1536,260,1440,260C1344,260,1248,260,1152,260C1056,260,960,260,864,260C768,260,672,260,576,260C480,260,384,260,288,260C192,260,96,260,48,260L0,260Z"
          ></path>
        </svg>
        
      <div className="contact" id='contact'>
        <h2>KEEP IN TOUCH!</h2>
        <div className="content animate-bounce">
          <p>Interested in discussing potential collaborations, have any questions, or just want to drop a message? Don't hesitate to connect with me using the links provided. I'm always open to new opportunities and conversations. Looking forward to connecting!</p>
          <div className="contact-icons ">

            <a href="https://www.linkedin.com/in/maria-monchot/" className="contact-icon"
            target="_blank" rel="noopener noreferrer">
              <CiLinkedin/>
            </a>

            <a href="https://github.com/KateClysm" className="contact-icon"
            target="_blank" rel="noopener noreferrer">
                <FaSquareGit  />
            </a>
            
          </div>
        </div>
      </div>
      </section>
      </RevealUp>
    );
    
};

export default Contact;