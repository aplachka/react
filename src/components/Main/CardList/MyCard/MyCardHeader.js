import React from 'react';
import { Checkbox, CardHeader, IconButton, Button } from '@material-ui/core';
import { Save, Clear, Edit } from '@material-ui/icons';
import Input from '../../../Input/Input';
import './MyCardHeader.css';

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

    const inputChangeHandler = (event) => {
        const updatedTitle = { ...title };
        updatedTitle.value = event.target.value;
        updatedTitle.valid = checkValidity(
            updatedTitle.value,
            updatedTitle.validation,
        );
        updatedTitle.touched = true;

        setTitle(updatedTitle);
    };

    const checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        return isValid;
    };

    return (
        <CardHeader
            title={
                props.editMode ? (
                    <div className="root">
                        <Input
                            elementType={title.elementType}
                            elementConfig={title.elementConfig}
                            validation={title.validation}
                            name="title"
                            defaultValue={props.title}
                            invalid={!title.valid}
                            touched={title.touched}
                            shouldValidate={title.validation}
                            changed={(event) => inputChangeHandler(event)}
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
