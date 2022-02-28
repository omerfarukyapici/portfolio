import Home from "./Component/Home";
import Projects from "./Component/Projects";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router >

      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
