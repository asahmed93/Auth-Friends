import React from 'react';
import './App.css';
import Friends from './components/Friends'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/friends" component={Friends} />
          <Route path="/login" component={Login}/>
          <Route component={Login} />
        </Switch>
        </div>
      </Router>
  );
}

export default App;
