import React from 'react';

import ProExpCard from '../components/ProExpCard';
import AcademicGradCard from '../components/AcademicGradCard';
import resumeData from '../assets/resumeData.json';
import Style from './ResumeStyle';

function Resume() {
  const { proExps, academicGraduations, address } = resumeData;

  return (
    <section>
      <Style.Container>
        <h3 className="resume-sub-item">Experiência Profissional</h3>
        { proExps.map((proExp, index) => (
          <ProExpCard key={ index } proExp={ proExp } />
        )) }
        <h3 className="resume-sub-item">Formação Acadêmica</h3>
        { academicGraduations.map((academicGrad, index) => (
          <AcademicGradCard key={ index } academicGrad={ academicGrad } />
        )) }
        <h3 className="resume-sub-item">Endereço</h3>
        <p className="resume-address">{ address }</p>
      </Style.Container>
    </section>
  );
}

export default Resume;
