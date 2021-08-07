import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";

//import internal components here
import './App.css';


function App() {
  return (
    <Router>
      <Route exact path='/login' component={}/>
      <Route exact path='/register' component={}/>
    </Router>
  );
}

export default App;
