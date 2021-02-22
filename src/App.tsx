import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import TimeLine from './Pages/TimeLine';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/timeline/:username" component={TimeLine}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
