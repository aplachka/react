import React from 'react';
import { Route } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <Route
            {...rest}
            render={(props) =>
                user !== null && user.isAdmin === true ? (
                    <Component {...props} />
                ) : (
                    <h2>Access Denied</h2>
                )
            }
        />
    );
};
export default AdminRoute;
