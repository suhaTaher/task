import React from 'react';
//import {BrowserRouter,Route} from 'react-router-dom'; 
import Home from './Screens/Home';
import Navbar from './Navigators/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import About from './Screens/About';
import JobDiscription from './Screens/JobDiscription';
import JobsList from './components/JobList';
import Sth from './Styles/sth';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/JobList' component={JobsList} />
            <Route path='/:Job_id' component={JobDiscription} />
          </Switch>
        </div>
      </BrowserRouter>

       </div>

  );
}

export default App;
