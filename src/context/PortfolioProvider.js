import React, { useState } from 'react';
import PortfolioContext from './PortfolioContext';

function PortfolioProvider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const contextValue = {
    stateA,
    setStateA,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;