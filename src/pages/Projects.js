import React from 'react';
import projectsList from '../assets/projects.json';
import ProjectCard from '../components/ProjectCard';

import Style from './ProjectsStyle';

function Projects() {
  return (
    <section>
      <Style.Container>
        { projectsList.map((project) => (
          <ProjectCard key={ project.id } project={ project } />
        )) }
      </Style.Container>
    </section>
  );
}

export default Projects;
