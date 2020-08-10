import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Member from './components/Member';
import Home from './components/Home';
import AddMember from './components/AddMember';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact={true}></Route>
          <Route path="/members" component={Member} exact={true}></Route>
          <Route path="/member/new" component={AddMember} exact={true}></Route>
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;
