import React from 'react';
import { Toolbar, AppBar, Typography } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';

import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

const inlineStyles = {
    spacer: {
        flex: 1,
    },
};

const NavBar = (props) => {
    const path = props.location.pathname;

    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                <Typography color="inherit">
                    {props.isLoggedIn
                        ? `Hi ${props.user.username}`
                        : 'React simple application'}
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
                            {props.isLoggedIn ? (
                                <NavLink to={{ pathname: '/sign-out' }}>
                                    Logout
                                </NavLink>
                            ) : (
                                <NavLink to={{ pathname: '/sign-in' }}>
                                    Sign in
                                </NavLink>
                            )}
                        </li>

                        {props.isLoggedIn && props.user.isAdmin && (
                            <li>
                                <NavLink to={{ pathname: '/settings' }}>
                                    Settings
                                </NavLink>
                            </li>
                        )}

                        {path === '/' && (
                            <li>
                                <Badge
                                    badgeContent={props.cards.length}
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

const mapStateToProps = (state) => {
    return {
        cards: state.cardReducer.cards,
        isLoggedIn: state.loginReducer.isLoggedIn,
        user: state.loginReducer.user,
    };
};

export default connect(mapStateToProps)(withRouter(NavBar));
