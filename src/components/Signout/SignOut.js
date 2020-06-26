import React from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../../store/actions/authActions';
import { connect } from 'react-redux';

const SignOut = ({ onLogout }) => {
    React.useEffect(() => {
        onLogout();
    }, [onLogout]);

    return <Redirect to="/" push={true} />;
};

const mapDispatchToProps = {
    onLogout: logout,
};

export default connect(null, mapDispatchToProps)(SignOut);
