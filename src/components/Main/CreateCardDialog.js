import React from 'react';
import {
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@material-ui/core';

const CreateCardDialog = (props) => {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const clear = () => {
        setTitle('');
        setContent('');
    };
    const close = () => {
        clear();
        props.onClose();
    };
    const create = () => {
        props.onCreate(title, content);
        clear();
    };

    return (
        <Dialog open={props.open} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add new card</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Title"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    rowsMax={4}
                    multiline
                    label="Text"
                    fullWidth
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={close} color="primary">
                    Cancel
                </Button>
                <Button
                    onClick={create}
                    color="primary"
                    disabled={title === '' || content === ''}>
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
};
export default CreateCardDialog;
