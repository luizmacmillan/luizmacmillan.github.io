import React from 'react';
import projectsList from '../assets/projects.json';
import ProjectCard from '../components/ProjectCard';

import Style from './ProjectsStyle';

function Projects() {
  return (
    <main>
      <Style.Container>
        { projectsList.map((project) => (
          <ProjectCard key={ project.id } project={ project } />
        )) }
      </Style.Container>
    </main>
  );
}

export default Projects;
