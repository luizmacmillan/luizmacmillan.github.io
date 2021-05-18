import React, { useContext } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import About from './pages/About';
import Contacts from './pages/Contacts';

import PortfolioContext from './context/PortfolioContext';
import Header from './components/Header';

function App() {
  const { headerTitle } = useContext(PortfolioContext);

  const routes = {
    home: (<Home />),
    projects: (<Projects />),
    resume: (<Resume />),
    about: (<About />),
    contacts: (<Contacts />),
  };

  return (
    <main>
      <Header />
      {/*
        As rotas foram feitas desta forma para que a aplicação
        não quebre no GitHub Pages ao atualizar a página.
      */}
      { routes[headerTitle] }
    </main>
  );
}

export default App;
