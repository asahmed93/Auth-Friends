import React from 'react';
import './App.css';
import Login from './components/Login'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route>
            <Login path="/login"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
