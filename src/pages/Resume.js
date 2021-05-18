import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';

import PortfolioContext from '../context/PortfolioContext';
import Style from './HomeStyle';

function Resume() {
  const { setHeaderSubTitle } = useContext(PortfolioContext);

  const subTitleUpdater = () => {
    setHeaderSubTitle('resume');
  };

  useEffect(() => {
    subTitleUpdater();
  }, []);

  return (
    <main>
      <Header />
      <Style.Container>
        <p>Em construção.</p>
      </Style.Container>
    </main>
  );
}

export default Resume;
