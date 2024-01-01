import React from "react";
import { useLocation } from "react-router-dom";
import IProject from "../../interfaces/IProject";
import "./project.scss";
import DProjects from "../projects/DProjects";
import TechnologyIcon from "../../components/technology-icon/TechnologyIcon";
import { FaGlobe } from "react-icons/fa";
import { FaSquareGit } from "react-icons/fa6";
import '../../animations/bounce.scss';
import { RevealUp, RevealLeft, RevealRight } from "../../animations/Reveal";

const Project: React.FC = () => {
  const location = useLocation();
  const id: number | undefined = location.state?.id;

  const project: IProject | undefined = DProjects.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>; 
  }

  return (
    <section className="section-project">

      <RevealUp>
        <h2>{project.title}</h2>
      </RevealUp>

      <div className="container">

        <RevealLeft>
          <div className="container-img">
            <img
              className="principal-view animate-bounce"
              src={`./project-photos/${project.photo}`}
              alt="Project Principal View"
            />
          </div>
        </RevealLeft>

       <RevealRight>
          <p className="description">{project.description}</p>
       </RevealRight>

        <RevealLeft>
           <div className="secondary-description">
              <h3>KEY FEATURES</h3>
              <ul>
                {project.key_features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
           </div>
        </RevealLeft>

        <RevealRight>
            <div className="container-img">
                <img
                  className="secondary-view  animate-bounce"
                  src={`./project-photos/${project.secondary_view}`}
                  alt="Project Secondary View"
                />
            </div>
        </RevealRight>

        

        

        <div className="container-mobile-rol">
            <div className="container-mobile ">
              <RevealLeft>
              <div className="container-reveal container-img">
              <img
                className="mobile-view animate-bounce"
                src={`./project-photos/${project.mobile_view}`}
                alt="Project Mobile View"
              />
            </div>
              </RevealLeft>
            </div>

            <div className="container-rol">
              <div className="text">
                 <RevealRight>
                 <p className="date">{project.date}</p>
                 </RevealRight>
                  <RevealRight>
                  <p className="my-rol">{project.my_rol}</p>
                  </RevealRight>

                  <RevealRight>
                  <div className="links">
                    <h3>LINKS</h3>
                    <div className="icons animate-bounce">
                    <a href={project.git} className="links-icon"
                      target="_blank" rel="noopener noreferrer">
                          <FaSquareGit  />
                    </a>
                    {project.link?(
                      <a href={project.link}   className="links-icon"
                      target="_blank" rel="noopener noreferrer">
                        <FaGlobe/>
                    </a>
                    ):(<></>)}
                    </div>
                  </div>
                  </RevealRight>
                </div>
            </div>
        </div>


        <div className="technologies-used">
          <RevealLeft>
          <h3>TECHNOLOGIES USED</h3>
          </RevealLeft>
          <RevealRight>
          <ul className="container-technologies">
            {project.technologies.map((technology, index) => (
              <TechnologyIcon key={index} icon={technology.icon} name={technology.name} />
            ))}
          </ul>
          </RevealRight>
        </div>

        
      </div>

    </section>
  );
};

export default Project;