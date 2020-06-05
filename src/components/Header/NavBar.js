import React from 'react';
import { Toolbar, AppBar, Typography } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import AppContext from '../../context/app-context';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { withRouter } from 'react-router-dom';

const inlineStyles = {
    spacer: {
        flex: 1,
    },
};

const NavBar = ({ location, ...props }) => {
    const { getCardsCount } = React.useContext(AppContext);
    const path = location.pathname;
    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                <Typography color="inherit">
                    React simple application
                </Typography>
                <span style={inlineStyles.spacer}></span>
                <nav className="NavBar">
                    <ul>
                        <li>
                            <NavLink to="/" exact>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={{ pathname: '/sign-in' }}>
                                Sign in
                            </NavLink>
                        </li>
                        {path === '/' && (
                            <li>
                                <Badge
                                    badgeContent={getCardsCount()}
                                    color="secondary">
                                    <Typography color="inherit">
                                        Card's count
                                    </Typography>
                                </Badge>
                            </li>
                        )}
                    </ul>
                </nav>
            </Toolbar>
        </AppBar>
    );
};

export default withRouter(NavBar);
