import React, { Component } from 'react';
import SignIn from './components/SignIn';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/signin" exact component={SignIn}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
