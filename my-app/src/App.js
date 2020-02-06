import React from 'react';
import Dashboard from "./engine/Dashboard";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

import './App.css';
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
      
      <ProtectedRoute path="/dashboard/outline_view" component={Dashboard} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />

    </Router>
  );
}

export default App;
