import * as actionTypes from './actionTypes';

export const checkViewOnly = (checked) => ({
    type: actionTypes.TOOGLE_CHECK,
    checked: checked,
});
