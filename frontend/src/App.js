import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './components/ProjectCard';
import ProjectForm from './components/ProjectForm';

function App() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await axios.get('http://localhost:5000/api/projects');
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>My Portfolio Tracker</h1>
      <ProjectForm fetchProjects={fetchProjects} />
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}

export default App;
