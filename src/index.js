import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {
    unstable_createMuiStrictModeTheme,
    ThemeProvider,
} from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/index';
import thunk from 'redux-thunk';

const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log('Dispatching action:', action);
            return next(action);
        };
    };
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log(store.getState());
const theme = unstable_createMuiStrictModeTheme();
ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
