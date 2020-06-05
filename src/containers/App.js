import React, { Component } from 'react';
import Main from '../components/Main/Main';
import Header from '../components/Header';
import { CssBaseline } from '@material-ui/core';
import { AppContextProvider } from '../context/app-context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from '../components/Signin/SignIn';
import PageNotFound from '../components/PageNotFound/PageNotFound';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <AppContextProvider>
                    <CssBaseline />
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/sign-in" exact component={SignIn} />
                        <Route component={PageNotFound} />
                    </Switch>
                </AppContextProvider>
            </BrowserRouter>
        );
    }
}

export default App;
