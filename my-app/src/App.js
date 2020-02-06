import React from 'react';
import Dashboard from "./engine/Dashboard";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

import './App.css';
import Account from "./Account/Account"

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          {/*NavBar*/}
        </div>
        <Route path={"/"}>
          <Account />
        </Route>
        <Route exact path="/dashboard" component={Dashboard} />
        {/* <ProtectedRoute path="/dashboard/outline_view" component={Dashboard} /> */}
        {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
      </div>
    </Router>
  );
}

export default App;
