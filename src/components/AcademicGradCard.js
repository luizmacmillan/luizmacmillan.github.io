import React from 'react';
import PropTypes from 'prop-types';
import { SiGooglecalendar } from 'react-icons/all';

import Style from './AcademicGradCardStyle';

function AcademicGradCard({ academicGrad:
  { institution, course, period },
}) {
  return (
    <Style.Container>
      <h3 className="academic-info">{ institution }</h3>
      <h3 className="academic-info">{ course }</h3>
      <hr />
      <div className="academic-period">
        <SiGooglecalendar className="academic-period-icon" />
        <p>{ period }</p>
      </div>
    </Style.Container>
  );
}

AcademicGradCard.propTypes = {
  academicGrad: PropTypes.shape({
    institution: PropTypes.string,
    course: PropTypes.string,
    period: PropTypes.string,
  }).isRequired,
};

export default AcademicGradCard;
