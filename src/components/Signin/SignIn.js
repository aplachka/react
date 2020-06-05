import React from 'react';
import { Button, TextField, Grid } from '@material-ui/core';

const SignIn = () => {
    return (
        <Grid
            container
            justify="center"
            spacing={0}
            direction="column"
            alignItems="center"
            style={{ minHeight: '70vh' }}>
            <form>
                <TextField autoFocus margin="dense" label="Username" />
                <br />
                <TextField margin="dense" label="Password" />
                <br />
                <Button variant="contained" color="primary">
                    Sign in
                </Button>
            </form>
        </Grid>
    );
};
export default SignIn;
