import React, { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Switch>
      <Route path="/about" component={ About } />
      <Route path="/" component={ Home } />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
