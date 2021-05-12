import React from 'react';
import PropTypes from 'prop-types';
import { FaWhatsappSquare, AiFillAppstore } from 'react-icons/all';

function ProjectCard({ project:
  { id, name, description, tags, repositoryLink, deployLink },
}) {
  return (
    <div>
      <p>{ id }</p>
      <p>{ name }</p>
      <p>{ description }</p>
      <p>{ tags.map((tag) => <span key={ tag }>{ tag }</span>) }</p>
      <a href={ repositoryLink }>
        <FaWhatsappSquare />
        Visite o repositório
      </a>
      { deployLink && (
        <a href={ deployLink }>
          <AiFillAppstore />
          Acesse o App
        </a>
      ) }
    </div>
  );
}

ProjectCard.defaultProps = {
  project: {
    deployLink: null,
  },
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.instanceOf(Array).isRequired,
    repositoryLink: PropTypes.string.isRequired,
    deployLink: PropTypes.string,
  }),
};

export default ProjectCard;
