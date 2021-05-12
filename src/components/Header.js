import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';
import navItems from '../assets/navItems.json';

function Header() {
  const { headerTitle, setHeaderTitle } = useContext(PortfolioContext);
  const [headerSubTitle, setHeaderSubTitle] = useState('Desenvolvedor Web Full-Stack.');
  const history = useHistory();

  const handleTitle = ({ name, displayName, subTitle }) => {
    const path = `/${name}`;

    setHeaderSubTitle(subTitle);
    setHeaderTitle(displayName);
    history(path);
  };

  return (
    <div>
      <h1>Luiz Mello</h1>
      <h2>{ headerTitle }</h2>
      <h3>{ headerSubTitle }</h3>
      <nav>
        { navItems.map(({ name, displayName }) => (
          <button
            key={ name }
            type="button"
            onClick={ () => handleTitle(name) }
          >
            { displayName }
          </button>
        )) }
      </nav>
    </div>
  );
}

export default Header;
