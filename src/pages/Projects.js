import React from 'react';
import Header from '../components/Header';
import projectsList from '../assets/projects.json';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <main>
      <Header />
      <div className="projects-container">
        { projectsList.map((project) => (
          <ProjectCard key={ project.id } project={ project } />
        )) }
      </div>
    </main>
  );
}

export default Projects;
