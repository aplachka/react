import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@material-ui/core';
import Input from '../Input/Input';

const CreateCardDialog = (props) => {
    const initialState = {
        title: {
            elementType: 'input',
            elementConfig: { type: 'text', placeholder: 'Title' },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        content: {
            elementType: 'textarea',
            elementConfig: { type: 'text', placeholder: 'Content' },
            value: '',
            validation: {},
            valid: false,
            touched: false,
        },
    };
    const [createCardDialog, setCreateCardDialog] = React.useState(
        initialState,
    );
    const [dialogIsValid, setDialogIsValid] = React.useState(false);
    const dialogElementsArray = [];
    for (let key in createCardDialog) {
        dialogElementsArray.push({
            id: key,
            config: createCardDialog[key],
        });
    }

    const inputChangeHandler = (event, inputIdentifier) => {
        const updatedCreateCardDialog = { ...createCardDialog };
        const updatedDialogElement = {
            ...updatedCreateCardDialog[inputIdentifier],
        };
        updatedDialogElement.value = event.target.value;
        updatedDialogElement.valid = checkValidity(
            updatedDialogElement.value,
            updatedDialogElement.validation,
        );
        updatedDialogElement.touched = true;
        updatedCreateCardDialog[inputIdentifier] = updatedDialogElement;
        let dialogIsValid = true;
        for (let inputIdentifier in updatedCreateCardDialog) {
            dialogIsValid =
                updatedCreateCardDialog[inputIdentifier].valid && dialogIsValid;
        }
        setDialogIsValid(dialogIsValid);
        setCreateCardDialog(updatedCreateCardDialog);
    };

    const checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    };

    const clear = () => {
        setCreateCardDialog(initialState);
        setDialogIsValid(false);
    };
    const close = () => {
        clear();
        props.onClose();
    };
    const create = () => {
        props.onCreate(
            createCardDialog.title.value,
            createCardDialog.content.value,
        );
        clear();
    };

    return (
        <Dialog open={props.open} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add new card</DialogTitle>
            <DialogContent>
                {dialogElementsArray.map((dialogElement) => (
                    <Input
                        key={dialogElement.id}
                        elementType={dialogElement.config.elementType}
                        elementConfig={dialogElement.config.elementConfig}
                        value={dialogElement.config.value}
                        label={dialogElement.config.elementConfig.placeholder}
                        invalid={!dialogElement.config.valid}
                        touched={dialogElement.config.touched}
                        shouldValidate={dialogElement.config.validation}
                        changed={(event) =>
                            inputChangeHandler(event, dialogElement.id)
                        }
                    />
                ))}
            </DialogContent>
            <DialogActions>
                <Button onClick={close} color="primary">
                    Cancel
                </Button>
                <Button
                    onClick={create}
                    color="primary"
                    disabled={!dialogIsValid}>
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
};
export default CreateCardDialog;
