import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PortfolioContext from './PortfolioContext';

function PortfolioProvider({ children }) {
  const [headerTitle, setHeaderTitle] = useState('Home');
  const contextValue = {
    headerTitle,
    setHeaderTitle,
  };

  return (
    <PortfolioContext.Provider value={ contextValue }>
      {children}
    </PortfolioContext.Provider>
  );
}

PortfolioProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default PortfolioProvider;
