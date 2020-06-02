import React from 'react';
import { CardContent, Typography, TextareaAutosize } from '@material-ui/core';

const CardBody = (props) => {
    return (
        <CardContent>
            {props.editMode ? (
                <TextareaAutosize
                    rowsMax={3}
                    aria-label="maximum height"
                    name="content"
                    className="MuiTypography-body1"
                    defaultValue={props.text}
                />
            ) : (
                <Typography component="p" className="body">
                    {props.text}
                </Typography>
            )}
        </CardContent>
    );
};
export default CardBody;
