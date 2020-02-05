import React from 'react';
import Dashboard from "./engine/Dashboard";

import { BrowserRouter as Router, Route} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Dashboard />
        {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
      </div>
    </Router>
  );
}

export default App;
