import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Shelf from './components/Shelf';
import Bin from './components/Bin';
import Add from './components/Add';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/shelf/:id" component={Shelf}/>
            <Route path="/shelf/:shelfid/bin/:binid" component={Bin}/>
            <Route path="/add/shelf/:shelfid/bin/:binid" component={Add}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
