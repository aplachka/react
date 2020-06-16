import React from 'react';
import { Checkbox, CardHeader, IconButton, Button } from '@material-ui/core';
import { Save, Clear, Edit } from '@material-ui/icons';
import './MyCardHeader.css';
import CardInputHeader from './CardInputHeader';

const MyCardHeader = (props) => {
    const [title, setTitle] = React.useState({
        elementType: 'input',
        elementConfig: { type: 'text' },
        value: '',
        validation: {
            required: true,
        },
        valid: true,
        touched: false,
    });

    const handleEditMode = (edit) => {
        const updatedTitle = { ...title };
        updatedTitle.valid = true;
        setTitle(updatedTitle);
        props.onEditing(edit);
        props.checked && props.onChecked(false);
    };

    return (
        <CardHeader
            title={
                props.editMode ? (
                    <div className="root">
                        <CardInputHeader
                            titleValue={props.title}
                            title={title}
                            onSetTitle={setTitle}
                        />
                        <Button type="submit" disabled={!title.valid}>
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
                            onDoubleClick={(e) => {
                                e.stopPropagation();
                            }}
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
