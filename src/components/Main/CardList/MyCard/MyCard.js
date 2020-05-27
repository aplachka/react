import React from 'react';
import { Card } from '@material-ui/core';
import MyCardHeader from './MyCardHeader';
import CardBody from './CardBody';
import './MyCard.css';
import WithLoadingDelay from '../../../../hoc/WithLoadingDelay';

const MyCard = (props) => {
    const [editing, setEditing] = React.useState(false);

    React.useEffect(() => {
        if (props.editAllowed !== true) setEditing(false);
    }, [props.editAllowed]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const content = event.target.elements.content.value;
        const title = event.target.elements.title.value;
        props.onSubmit(title, content, props.checked);
        setEditing(false);
    };

    return (
        <WithLoadingDelay>
            <form onSubmit={handleSubmit} className="content">
                <Card
                    className="card"
                    style={{ backgroundColor: props.checked && 'blue' }}>
                    <MyCardHeader
                        title={props.title}
                        editAllowed={props.editAllowed}
                        editMode={editing}
                        onEditing={setEditing}
                        onChecked={props.onChecked}
                        checked={props.checked}
                    />
                    <CardBody text={props.content} editMode={editing} />
                </Card>
            </form>
        </WithLoadingDelay>
    );
};

export default MyCard;
