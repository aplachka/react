import React, { Component } from 'react';
import NavBar from './NavBar';
import Content from './Content';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Content />
      </div>
    );
  }
}

export default App;
