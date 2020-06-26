import React from 'react';
import styled from 'styled-components';
import { FormControlLabel, Checkbox } from '@material-ui/core';

const colorify = (checked) => (checked ? 'green' : 'blue');

const StyledFormControlLabel = styled(FormControlLabel)`
    && {
        color: ${(props) => colorify(props.checked)};
    }
    && .MuiCheckbox-root {
        color: ${(props) => colorify(props.checked)};
    }
`;

const StyledCheckBox = (props) => {
    return (
        <StyledFormControlLabel
            checked={props.checked}
            control={
                <Checkbox
                    checked={props.checked}
                    onChange={() => props.onChecked(props.checked)}
                />
            }
            label={props.label}
        />
    );
};
export default StyledCheckBox;
