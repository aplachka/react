import React from 'react';
import { Checkbox, IconButton, Button } from '@material-ui/core';
import { Save, Clear, Edit } from '@material-ui/icons';
import './Title.css';

const Title = (props) => {
    const handleEditMode = (edit) => {
        props.onEditing(edit);
        props.onChecked(false);
    };

    return props.editMode ? (
        <div className="root">
            <input type="text" name="title" defaultValue={props.title} />
            <Button type="submit">
                <Save />
            </Button>
            <IconButton type="reset" onClick={() => handleEditMode(false)}>
                <Clear />
            </IconButton>
        </div>
    ) : (
        <div className="root">
            <h3>{props.title}</h3>
            {props.editAllowed && (
                <IconButton type="button" onClick={() => handleEditMode(true)}>
                    <Edit />
                </IconButton>
            )}
            <Checkbox
                color="primary"
                checked={props.checked}
                onChange={(event) => props.onChecked(event.target.checked)}
            />
        </div>
    );
};
export default Title;
