import React from 'react';
import StyledCheckBox from '../Main/StyledCheckBox';
import { connect } from 'react-redux';
import { checkViewOnly } from '../../store/actions/viewOnlyModeActions';

const Settings = (props) => {
    return (
        <StyledCheckBox
            label="View only"
            checked={props.checked}
            onChecked={props.onCheck}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        checked: state.viewOnlyModeReducer.viewOnly,
    };
};

const mapDispatchToProps = {
    onCheck: checkViewOnly,
};
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
