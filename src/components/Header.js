import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';

function Header() {
  const { title, setTitle } = useContext(PortfolioContext);
  const history = useHistory();

  const handleTitle = ({ target: { name, innerHTML } }) => {
    const path = `/${name}`;
    setTitle(innerHTML);
    history(path);
  };

  return (
    <div>
      <h1>Luiz Mello</h1>
      <h2>{ title }</h2>
      <nav>
        <button type="button" onClick={ handleTitle } name="home">Home</button>
        <button type="button" onClick={ handleTitle } name="projects">Projetos</button>
        <button type="button" onClick={ handleTitle } name="resume">Currículo</button>
        <button type="button" onClick={ handleTitle } name="about">Sobre mim</button>
        <button type="button" onClick={ handleTitle } name="contacts">Contatos</button>
      </nav>
    </div>
  );
}

export default Header;
