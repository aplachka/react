import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
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
