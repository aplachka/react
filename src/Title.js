import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Checkbox } from '@material-ui/core';

const styles = {
    root: {
        display: "flex",
    },
    h3: {
        flexGrow: 1
    }

};

const Title = (props) => {

    const { classes } = props;

    return (<div className={classes.root} >
        <h3 className={classes.h3} >{props.title}</h3>
        <Checkbox
            color='primary'
            onChange={props.handler}
        /></div>);
}
Title.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Title);