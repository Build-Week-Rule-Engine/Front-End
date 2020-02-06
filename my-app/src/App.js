import React from 'react';
import Dashboard from "./engine/Dashboard";

import { BrowserRouter as Router } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

import './App.css';
import { Route } from "react-router-dom"
import Account from "./Account/Account"
import styled from "styled-components"
import PendingRequests from './Account/PendingRequests/PendingRequests';
import Navbar from './Navbar/Navbar';

function App() {

  const CenterDiv = styled.div`
  width: 25%;
  margin: 0 auto;
  `

  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Route path={"/Account"}>
        <CenterDiv>
          <Account />
        </CenterDiv>
      </Route>
      <Route path={"/Pendingrequests"}>
        <PendingRequests />
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
