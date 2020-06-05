import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const withLoadingDelay = (WrappedComponent) => (props) => {
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        const timeOut = setTimeout(() => setLoading(false), 2000);
        return () => {
            clearTimeout(timeOut);
        };
    }, []);

    if (loading) {
        return (
            <CircularProgress style={{ marginTop: '20%', marginLeft: '40%' }} />
        );
    } else {
        return <WrappedComponent {...props} />;
    }
};
export default withLoadingDelay;
