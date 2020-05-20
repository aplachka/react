import React from 'react';
import { Card, CardHeader } from '@material-ui/core';
import Title from './Title';
import CardBody from './CardBody';
import './MyCard.css';

const MyCard = (props) => {
    const [checked, setChecked] = React.useState(false);
    const [title, setTitle] = React.useState(props.title || '');
    const [content, setContent] = React.useState(props.content || '');
    const [editing, setEditing] = React.useState(false);

    React.useEffect(() => {
        if (props.readOnlyCheckBox === true) setEditing(false);
    }, [props.readOnlyCheckBox]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const content = event.target.elements.content.value;
        const title = event.target.elements.title.value;
        setTitle(title);
        setContent(content);
        setEditing(false);
    };

    return (
        <form onSubmit={handleSubmit} className="content">
            <Card
                className="card"
                style={{ backgroundColor: checked && 'blue' }}>
                <CardHeader
                    title={
                        <Title
                            title={title}
                            editAllowed={!props.readOnlyCheckBox}
                            editMode={editing}
                            onEditing={setEditing}
                            onChecked={setChecked}
                            checked={checked}
                        />
                    }></CardHeader>
                <CardBody text={content} editMode={editing} />
            </Card>
        </form>
    );
};

export default MyCard;
