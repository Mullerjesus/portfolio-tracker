import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = ({ fetchProjects }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/projects', { title, description });
    fetchProjects();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;
