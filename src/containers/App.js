import React, { Component } from 'react';
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import { CssBaseline } from '@material-ui/core';

class App extends Component {
    render() {
        return (
            <>
                <CssBaseline />
                <Header />
                <Main />
            </>
        );
    }
}

export default App;
