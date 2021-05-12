import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
