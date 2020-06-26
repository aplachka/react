import * as actionTypes from '../actions/actionTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { isLoggedIn: true, user } : {};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return {
                isLoggedIn: true,
                user: action.user,
            };

        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};

export default loginReducer;
