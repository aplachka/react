import React from 'react'
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardHeader, withStyles } from '@material-ui/core';
import Title from './Title';

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

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className={classes.root} >
            <Card className={classes.card} style={{ backgroundColor: checked ? 'blue' : '' }}>
                <CardHeader
                    title={<Title
                        handler={handleChange}
                    />}>
                </CardHeader>
                <CardContent>
                    <Typography component="p">
                        Hello World
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


