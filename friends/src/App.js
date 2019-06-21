import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./views/Login";
import PrivateRoute from './utility/PrivateRoute'
import FriendsContainer from "./views/FriendsContainer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <PrivateRoute path="/friends" component={FriendsContainer} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
