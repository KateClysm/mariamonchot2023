import React from 'react';
import './technologies.scss';
import hands from '../../assets/hand.png'
import TechnologyIcon from '../../components/technology-icon/TechnologyIcon';
import { technologies } from './ListTechnologies';
import tech_wave from '../../assets/tech_wave.png';
import { RevealUp } from '../../animations/Reveal';

const Technologies: React.FC = () => {
      return (
        <section className="section-technologies" >

          <img src={tech_wave} alt="wave shape" className='tech-wave-ilustration'/>

          <RevealUp>
            <h2>TECHNOLOGIES</h2>
          </RevealUp>
    
          <div className="container">

            <div className="position" id="technologies"></div>

            <RevealUp>
              <div className="container-techs">
                {technologies.map((tech, index) => (
                <TechnologyIcon key={index} icon={tech.icon} name={tech.name} />
              ))}
              </div>
            </RevealUp>

            <img src={hands} alt="hands ilustration" className='hands-ilustration'/>

          </div>
        </section>
      );
};

export default Technologies;