import IProject from '../../interfaces/IProject';
import "./projectcard.scss";
import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import '../../animations/bounce.scss';

const ProjectCard: React.FC<{ project: IProject; onShowMoreClick: () => void; }> = ({ project, onShowMoreClick }) => {

  return (
    <div className="container-project-card">
      <div className="project-card">
        <div className="project-inside">
          <div
            className="project-photo"
            style={{ backgroundImage: `url(./project-photos/${project.photo})` }}
          ></div>

          <div className="project-info">
            <h3>{project.title}</h3>

            <p>
              {project.card_description} - {project.date}
            </p>

            <div className="project-icons">
              {project.git && (
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="project-icon" />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="project-icon" />
                </a>
              )}
            </div>

            <div className="show-button" onClick={onShowMoreClick}>
              Show More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;