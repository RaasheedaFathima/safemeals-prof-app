import React from 'react';

//import internal components here

//import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

//import {Login} from './pages/auth/login';
import Register from './pages/auth/register';
import Landing from './pages/auth/landing';

function App() {

  return (
    <Router>
      <Route exact path='/' component= {Landing}/>
       <Route exact path='/register' component={Register}/>
       </Router>
  );
}


export default App;
