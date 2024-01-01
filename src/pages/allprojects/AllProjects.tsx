import React from "react";
import "./allprojects.scss";
import DProjects from "../projects/DProjects";
import ProjectCard from "../../components/projectcard/ProjectCard";
import { useNavigate } from "react-router-dom";
import IProject from "../../interfaces/IProject";

const Projects: React.FC = () => {
      const navigate = useNavigate();

    const handleShowMoreClick = (project: IProject) => {
        navigate(`/project/${project.id}`, { state: { project } });
    };

    return (
        <section className="section-all-projects px5p">
          <h2>PROJECTS</h2>
    
          <div className="container">
            {DProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onShowMoreClick={() => handleShowMoreClick(project)}
              />
            ))}
          </div>
    
        </section>
      );
    };

export default Projects;
