import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Account from "./Account/Account"

function App() {
  return (
    <div className="App">
      <Route path={"/Account"}>
        <Account />
      </Route>
    </div>
  );
}

export default App;
