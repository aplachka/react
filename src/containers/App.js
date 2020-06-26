import React, { Component } from 'react';
import Main from '../components/Main/Main';
import Header from '../components/Header';
import { CssBaseline } from '@material-ui/core';
import { AppContextProvider } from '../context/app-context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from '../components/Signin/SignIn';
import SignOut from '../components/Signout/SignOut';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import CardDetails from '../components/Main/CardDetail';
import Settings from '../components/Settings/Settings';
import { connect } from 'react-redux';
import { fetchCards } from '../store/actions/cardActions';

class App extends Component {
    componentDidMount() {
        this.props.onFetchCards();
    }

    render() {
        return (
            <BrowserRouter>
                <AppContextProvider>
                    <CssBaseline />
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/sign-in" exact component={SignIn} />
                        <Route path="/sign-out" exact component={SignOut} />
                        <Route path="/card/:id" exact component={CardDetails} />
                        <Route path="/settings" exact component={Settings} />
                        <Route component={PageNotFound} />
                    </Switch>
                </AppContextProvider>
            </BrowserRouter>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchCards: () => dispatch(fetchCards()),
    };
};

export default connect(null, mapDispatchToProps)(App);
