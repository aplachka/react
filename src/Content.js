import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardHeader } from '@material-ui/core';

const styles = {
    card: {
        maxWidth: 345,
    },
    root: {
        padding: "100px"
    }

};

const Content = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    title='Task1'
                >
                </CardHeader>
                <CardContent>
                    <Typography component="p">
                        It's my first react task
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
Content.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Content);


