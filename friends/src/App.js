import React from 'react';
import {Route} from 'react-router-dom';
import Login from './views/Login'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
