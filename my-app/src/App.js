import React from 'react';
import Dashboard from "./engine/Dashboard";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

import './App.css';
import { Route } from "react-router-dom"
import Account from "./Account/Account"

function App() {
  return (
    <Router>
      <div>
        {/*NavBar*/}
      </div>
      <Route path={"/"}>
        <Account />
      </Route>
      <Route path={"/Dashboard"}>
        <div className="App">
          <Dashboard />
          {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
        </div>
      </Route>
    </Router>
  );
}

export default App;
