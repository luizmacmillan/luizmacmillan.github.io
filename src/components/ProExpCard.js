import React from 'react';
import PropTypes from 'prop-types';
import { SiGooglecalendar, TiLocation } from 'react-icons/all';

import Style from './ProExpCardStyle';

function ProExpCard({ proExp:
  { company, role, period, location, dotDescriptions, description },
}) {
  return (
    <Style.Container>
      <h3 className="pro-exp-company">{ company }</h3>
      <h3 className="pro-exp-role">{ role }</h3>
      <div className="pro-exp-period">
        <SiGooglecalendar className="pro-exp-period-icon" />
        <p>{ period }</p>
      </div>
      <div className="pro-exp-location">
        <TiLocation className="pro-exp-location-icon" />
        <p>{ location }</p>
      </div>
      <hr />
      { dotDescriptions.map((dotDescription, index) => (
        <p key={ index } className="pro-exp-dot-description">{ dotDescription }</p>
      )) }
      <p className="pro-exp-description">{ description }</p>
    </Style.Container>
  );
}

ProExpCard.propTypes = {
  proExp: PropTypes.shape({
    company: PropTypes.string,
    role: PropTypes.string,
    period: PropTypes.string,
    location: PropTypes.string,
    dotDescriptions: PropTypes.instanceOf(Array),
    description: PropTypes.string,
  }).isRequired,
};

export default ProExpCard;
