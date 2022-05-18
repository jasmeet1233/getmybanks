import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="pt-20">
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/about" component={About} exact /> */}
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App
