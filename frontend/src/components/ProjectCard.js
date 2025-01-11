import React from 'react';

const ProjectCard = ({ project, onDelete, onUpdate }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>Status: {project.status}</p>
      <button onClick={() => onUpdate(project)}>Edit</button>
      <button onClick={() => onDelete(project._id)}>Delete</button>
    </div>
  );
};

export default ProjectCard;
