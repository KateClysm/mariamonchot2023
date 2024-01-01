import './aboutme.scss';
import { FaFileAlt, FaArrowDown } from "react-icons/fa";
import MariaMonchotPDF from '../../assets/NPNCEnMariaMonchot.pdf';
import ProfilePhoto from '../../components/profile-photo/ProfilePhoto';
import hands from '../../assets/hands.png';
import computer from '../../assets/computer.png';
import '../../animations/bounce.scss';
import { RevealUp, RevealRight } from '../../animations/Reveal';
import { useState } from 'react';

const AboutMe: React.FC = () => {
  const [isProfileRotated, setIsProfileRotated] = useState(false);

  const handleCVButtonHover = (isHovering: boolean) => {
    setIsProfileRotated(isHovering);
  };

  
  return (

    <section className="section-about-me">

       <div className="container-intro">
          <RevealUp>
            <div className="container-profile-photo">
              <ProfilePhoto isRotated={isProfileRotated}/>
            </div>
          </RevealUp>

          <RevealUp>
            <div className="info"  onMouseEnter={() => handleCVButtonHover(true)}
                onMouseLeave={() => handleCVButtonHover(false)}>
              <h1>MARIA MONCHOT</h1>

              <h2>FULL STACK DEVELOPER</h2>

              <a
                href={MariaMonchotPDF}
                download
                className="cv-download"
               
              >
                <FaFileAlt className="cv-icon" />
                DOWNLOAD CV
              </a>
            </div>
          </RevealUp>

          <div className="container-arrow">
            <FaArrowDown className="arrow animate-bounce" />
          </div>
       </div>

          
       <div className="container-about">

         <div className="container-hands">
           <RevealRight>
           <div className="container-reveal">
             <img src={hands} alt="hands ilustration" className="hands" />
           </div>
           </RevealRight>
         </div>
           
         <div className="container-computer">
         <RevealUp>
           <div className="container-reveal">
              <img src={computer} alt="computer" className="computer" />
           </div>
           </RevealUp>
         </div>
            
         <div className="about" >
           <div className="position" id="about"></div>
           <RevealUp>
              <h2 className="title">ABOUT ME</h2>
           </RevealUp>
           <RevealUp>
              <p>
              As a FullStack Developer and Computer Science student, I find a balance between
              technical skills and interpersonal competencies. My experience as a project organizer
              has enriched my perspective on teamwork and communication. However, what truly
              defines me is my strong commitment to self-directed study. I am seeking a position
              that not only values these skills but also provides me with the opportunity to continue
              learning and growing in a dynamic and challenging environment.

              </p>
           </RevealUp>
         </div>
       </div>
     </section>
  );
};

export default AboutMe;