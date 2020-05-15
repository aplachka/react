import React, { Component } from 'react';
import NavBar from './NavBar';
import Content from './Content';


class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Content />
      </>
    );
  }
}

export default App;
