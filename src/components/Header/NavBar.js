import React from 'react';
import { Toolbar, AppBar, Typography } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import AppContext from '../../context/app-context';

const inlineStyles = {
    spacer: {
        flex: 1,
    },
};

const NavBar = () => {
    const { getCardsCount } = React.useContext(AppContext);

    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                <Typography color="inherit">
                    React simple application
                </Typography>
                <span style={inlineStyles.spacer}></span>
                <Badge badgeContent={getCardsCount()} color="secondary">
                    <Typography color="inherit">Card's count</Typography>
                </Badge>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
