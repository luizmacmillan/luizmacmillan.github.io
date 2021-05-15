import React from 'react';
import PropTypes from 'prop-types';
import { FaGithubSquare, AiFillAppstore, SiGooglecalendar } from 'react-icons/all';

import Style from './ProjectCartStyle';

function ProjectCard({ project:
  { name, description, tags, createdAt, repositoryLink, deployLink },
}) {
  return (
    <Style.Container>
      <h3 className="project-name">{ name }</h3>
      <p className="description">{ description }</p>
      <div className="tag-container">
        { tags.map((tag) => <span className="tag" key={ tag }>{ tag }</span>) }
      </div>
      <div>
        <p className="project-info">
          <SiGooglecalendar fill="#000B0D" size="3rem" />
          { createdAt }
        </p>
        <a href={ repositoryLink } className="project-info">
          <FaGithubSquare fill="#000B0D" size="3rem" />
          Visite o repositório
        </a>
        { deployLink && (
          <a href={ deployLink } className="project-info">
            <AiFillAppstore fill="#000B0D" size="3rem" />
            Acesse o App
          </a>
        ) }
      </div>
    </Style.Container>
  );
}

ProjectCard.defaultProps = {
  project: {
    deployLink: null,
  },
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.instanceOf(Array).isRequired,
    createdAt: PropTypes.string.isRequired,
    repositoryLink: PropTypes.string.isRequired,
    deployLink: PropTypes.string,
  }),
};

export default ProjectCard;
