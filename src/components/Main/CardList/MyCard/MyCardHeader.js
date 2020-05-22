import React from 'react';
import { Checkbox, CardHeader, IconButton, Button } from '@material-ui/core';
import { Save, Clear, Edit } from '@material-ui/icons';
import './MyCardHeader.css';

const MyCardHeader = (props) => {
    const handleEditMode = (edit) => {
        props.onEditing(edit);
        props.onChecked(false);
    };

    return (
        <CardHeader
            title={
                props.editMode ? (
                    <div className="root">
                        <input
                            type="text"
                            name="title"
                            defaultValue={props.title}
                        />
                        <Button type="submit">
                            <Save />
                        </Button>
                        <IconButton
                            type="reset"
                            onClick={() => handleEditMode(false)}>
                            <Clear />
                        </IconButton>
                    </div>
                ) : (
                    <div className="root">
                        <h3>{props.title}</h3>
                        {props.editAllowed && (
                            <IconButton
                                type="button"
                                onClick={() => handleEditMode(true)}>
                                <Edit />
                            </IconButton>
                        )}
                        <Checkbox
                            color="primary"
                            checked={props.checked}
                            onChange={(event) =>
                                props.onChecked(event.target.checked)
                            }
                        />
                    </div>
                )
            }></CardHeader>
    );
};
export default MyCardHeader;
