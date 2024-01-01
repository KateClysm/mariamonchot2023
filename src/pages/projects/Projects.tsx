import React, { useEffect, useState } from "react";
import DProjects from "./DProjects";
import ProjectCard from "../../components/projectcard/ProjectCard";
import "./projects.scss";
// import IProject from "../../interfaces/IProject";
import { useNavigate } from "react-router-dom";
import { RevealUp } from "../../animations/Reveal";


const Projects: React.FC = () => {

  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);


  const handleShowMoreClick = (id: number) => {
    navigate("/mariamonchot/project", { state: { id } }); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxProjectsToShow = windowWidth < 768 ? 3 : 4;
  const visibleProjects = DProjects.slice(0, maxProjectsToShow);
  const shouldShowButton = DProjects.length > maxProjectsToShow;


  const handleShowAllProjects = () => {
    navigate("/mariamonchot/allprojects");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (

    <div className="projects px5p" id="projects">
      <RevealUp>
        <h2>PROJECTS</h2>
      </RevealUp>

      <RevealUp>
        <div className="container-projects">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onShowMoreClick={() => handleShowMoreClick(project.id)}
            />
          ))}
        </div>
      </RevealUp>

      <RevealUp>
        <>
          {shouldShowButton && (
            <button
              className="more-projects"
              onClick={handleShowAllProjects}>
              Show More Projects
            </button>
        )}
      </>
      </RevealUp>

      <svg
        id="wave"
        className="wave-projects"
        viewBox="0 0 1440 120"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,24L80,36C160,48,320,72,480,70C640,68,800,40,960,26C1120,12,1280,12,1440,26C1600,40,1760,68,1920,74C2080,80,2240,64,2400,54C2560,44,2720,40,2880,36C3040,32,3200,28,3360,32C3520,36,3680,48,3840,50C4000,52,4160,44,4320,36C4480,28,4640,20,4800,14C4960,8,5120,4,5280,2C5440,0,5600,0,5760,2C5920,4,6080,8,6240,12C6400,16,6560,20,6720,22C6880,24,7040,24,7200,26C7360,28,7520,32,7680,44C7840,56,8000,76,8160,88C8320,100,8480,104,8640,94C8800,84,8960,60,9120,50C9280,40,9440,44,9600,50C9760,56,9920,64,10080,70C10240,76,10400,80,10560,86C10720,92,10880,100,11040,94C11200,88,11360,68,11440,58L11520,48L11520,120L11440,120C11360,120,11200,120,11040,120C10880,120,10720,120,10560,120C10400,120,10240,120,10080,120C9920,120,9760,120,9600,120C9440,120,9280,120,9120,120C8960,120,8800,120,8640,120C8480,120,8320,120,8160,120C8000,120,7840,120,7680,120C7520,120,7360,120,7200,120C7040,120,6880,120,6720,120C6560,120,6400,120,6240,120C6080,120,5920,120,5760,120C5600,120,5440,120,5280,120C5120,120,4960,120,4800,120C4640,120,4480,120,4320,120C4160,120,4000,120,3840,120C3680,120,3520,120,3360,120C3200,120,3040,120,2880,120C2720,120,2560,120,2400,120C2240,120,2080,120,1920,120C1760,120,1600,120,1440,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        ></path>
      </svg>
    </div>
  );
};

export default Projects;
