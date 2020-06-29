import { combineReducers } from 'redux';
import loginReducer from './authReducer';
import cardReducer from './cardReducer';
import viewOnlyModeReducer from './viewOnlyModeReducer';

const rootReducer = combineReducers({
    loginReducer,
    cardReducer,
    viewOnlyModeReducer,
});

export default rootReducer;
