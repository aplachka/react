import React from 'react';
import { Card } from '@material-ui/core';
import MyCardHeader from './MyCardHeader';
import CardBody from './CardBody';
import './MyCard.css';

const MyCard = (props) => {
    const [editing, setEditing] = React.useState(false);

    React.useEffect(() => {
        if (props.editAllowed !== true) setEditing(false);
    }, [props.editAllowed]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const content = event.target.elements.content.value;
        const title = event.target.elements.title.value;
        props.onSubmit({
            id: props.id,
            caption: title,
            text: content,
            checked: props.checked,
        });
        setEditing(false);
    };

    const handleChecked = (checked) => {
        props.onChecked(props.id, checked);
    };

    return (
        <form onSubmit={handleSubmit} className="content">
            <Card
                className="card"
                style={{ backgroundColor: props.checked && 'blue' }}>
                <MyCardHeader
                    title={props.title}
                    editAllowed={props.editAllowed}
                    editMode={editing}
                    onEditing={setEditing}
                    onChecked={handleChecked}
                    checked={props.checked}
                />
                <CardBody text={props.content} editMode={editing} />
            </Card>
        </form>
    );
};

export default MyCard;
