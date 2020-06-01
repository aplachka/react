import React, { Component } from 'react';
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import { CssBaseline } from '@material-ui/core';
import { AppContextProvider } from '../context/app-context';

class App extends Component {
    render() {
        return (
            <AppContextProvider>
                <CssBaseline />
                <Header />
                <Main />
            </AppContextProvider>
        );
    }
}

export default App;
