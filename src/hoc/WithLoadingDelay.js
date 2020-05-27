import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const WithLoadingDelay = (props) => {
    const [loading, setLoading] = React.useState(true);

    setTimeout(() => setLoading(false), 2000);

    if (loading) {
        return (
            <CircularProgress
                top={30}
                style={{ marginTop: '20%', marginLeft: '40%' }}
            />
        );
    } else {
        return <>{props.children}</>;
    }
};
export default WithLoadingDelay;
