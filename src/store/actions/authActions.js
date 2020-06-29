import * as actionTypes from './actionTypes';
import { fetchCards } from './cardActions';

export const setLoginState = (loginData) => {
    return {
        type: actionTypes.USER_LOGIN,
        user: loginData,
    };
};

export const login = (username, password, isAdmin) => {
    return (dispatch) => {
        return Promise.resolve({ username, password, isAdmin }).then((user) => {
            dispatch(setLoginState(user));
            dispatch(fetchCards());
            localStorage.setItem('user', JSON.stringify(user));
        });
    };
};

export const logout = () => (dispatch) => {
    localStorage.clear();
    dispatch({
        type: actionTypes.USER_LOGOUT,
    });
    dispatch(fetchCards());
};
