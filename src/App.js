import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './containers/HomePage';
import Signin from './containers/Signin';
import Signup from './containers/SIgnup';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
