import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';
import navItems from '../assets/navItems.json';

import Style from './HeaderStyle';

function Header() {
  const { headerTitle, setHeaderTitle } = useContext(PortfolioContext);
  const [
    headerSubTitle,
    setHeaderSubTitle,
  ] = useState('Desenvolvedor Web Full-Stack Jr.');
  const history = useHistory();

  const handleTitle = ({ name, subTitle }) => {
    const path = `/${name}`;

    setHeaderSubTitle(subTitle);
    setHeaderTitle(name);
    history.push(path);
  };

  useEffect(() => {
  }, [headerTitle]);

  return (
    <Style.Container selected={ headerTitle }>
      <h1 className="name">Luiz Mello</h1>
      <Style.CounterContainer>
        <div data-hover="Contador de Visitas →">
          <img
            src="https://www.counter12.com/img-122Zc6A56wxW5dDW-15.gif"
            alt="contador de acessos"
          />
        </div>
      </Style.CounterContainer>
      <h3 className="sub-title">{ headerSubTitle }</h3>
      <nav className="nav-container">
        { navItems.map((item) => (
          <button
            key={ item.name }
            type="button"
            className={ `nav-button ${item.name}` }
            onClick={ () => handleTitle(item) }
          >
            { item.displayName }
          </button>
        )) }
      </nav>
    </Style.Container>
  );
}

export default Header;
