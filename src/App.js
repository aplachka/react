import React, { Component } from 'react';
import NavBar from './NavBar';
import Content from './Content';


class App extends Component {

  render() {
    return (
      <>
        <NavBar />
        <Content title="Task 3" content="This is task 3" />
      </>
    );
  }
}

export default App;
