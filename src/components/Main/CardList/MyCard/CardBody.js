import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import Input from '../../../Input/Input';

const CardBody = (props) => {
    return (
        <CardContent>
            {props.editMode ? (
                <Input
                    elementType="textarea"
                    name="content"
                    defaultValue={props.text}
                    invalid={false}
                    touched={false}
                    rows={3}
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
