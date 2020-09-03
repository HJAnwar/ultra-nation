import React from 'react';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notfound from './Component/Notfound/Notfound';
import Countrydetail from './Component/Countrydetail/Countrydetail';
import Header from './Component/Header/Header';
import About from './Component/About/About';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/country/:name">
            <Countrydetail/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <Notfound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;