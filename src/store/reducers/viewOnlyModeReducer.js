import * as actionTypes from '../actions/actionTypes';

const initialState = {
    viewOnly: false,
};

const viewOnlyModeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOOGLE_CHECK:
            return {
                viewOnly: !action.checked,
            };

        default:
            return state;
    }
};

export default viewOnlyModeReducer;
