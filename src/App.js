import React, { Component } from 'react';
import NavBar from './NavBar';
import MyCard from './MyCard';

class App extends Component {
    render() {
        return (
            <>
                <NavBar />
                <MyCard title="Task 3" content="This is task 3" />
            </>
        );
    }
}

export default App;
