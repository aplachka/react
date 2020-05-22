import React from 'react';
import { Card } from '@material-ui/core';
import MyCardHeader from './MyCardHeader';
import CardBody from './CardBody';
import './MyCard.css';

const MyCard = (props) => {
    const [checked, setChecked] = React.useState(false);
    const [title, setTitle] = React.useState(props.title || '');
    const [content, setContent] = React.useState(props.content || '');
    const [editing, setEditing] = React.useState(false);

    React.useEffect(() => {
        if (props.editAllowed !== true) setEditing(false);
    }, [props.editAllowed]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const content = event.target.elements.content.value;
        const title = event.target.elements.title.value;
        setTitle(title);
        setContent(content);
        setEditing(false);
    };

    const handleChecked = (checked) => {
        props.onChecked(checked);
        setChecked(checked);
    };

    return (
        <form onSubmit={handleSubmit} className="content">
            <Card
                className="card"
                style={{ backgroundColor: checked && 'blue' }}>
                <MyCardHeader
                    title={title}
                    editAllowed={props.editAllowed}
                    editMode={editing}
                    onEditing={setEditing}
                    onChecked={handleChecked}
                    checked={checked}
                />
                <CardBody text={content} editMode={editing} />
            </Card>
        </form>
    );
};

export default MyCard;
