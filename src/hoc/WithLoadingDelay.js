import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const withLoadingDelay = (WrappedComponent) => (props) => {
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        let isMounted = true;
        setTimeout(() => isMounted && setLoading(false), 2000);
        return () => {
            isMounted = false;
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
