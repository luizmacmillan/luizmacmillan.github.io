import React, { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Curriculum from './pages/Curriculum';
import About from './pages/About';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Switch>
      <Route path="/projects" component={ Projects } />
      <Route path="/curriculum" component={ Curriculum } />
      <Route path="/about" component={ About } />
      <Route path="/contacts" component={ Contacts } />
      <Route path="/" component={ Home } />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
