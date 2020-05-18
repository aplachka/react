import React from "react";
import { Card, CardContent, Typography, CardHeader } from "@material-ui/core";
import Title from "./Title";
import "./Content.css";



const Content = (props) => {
   

    const [checked, setChecked] = React.useState(false);
    const [title, setTitle] = React.useState(props.title || "");
    const [content, setContent] = React.useState(props.content || "");
    const [editing, setEditing] = React.useState(false);


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    
    const handleSubmit = (event) => {
        event.preventDefault();
        const content = event.target.elements.content.value;
        const title = event.target.elements.title.value;
        setTitle(title);
        setContent(content);
        setEditing(false);
    };

    return (
        <form onSubmit={handleSubmit} className="content" >
            <Card className="card" style={{ backgroundColor: checked ? "blue" : "" }}>
                <CardHeader
                    title={<Title
                        title={title}
                        handler={handleChange}
                        editMode={editing}
                        setEditing={setEditing}
                        setChecked={setChecked}
                        checked={checked}
                    />}>

                </CardHeader>
                <CardContent>
                    <Typography component="p" className={editing ? "hidden" : ""} >
                        {content}
                    </Typography>
                    <input
                        type="text"
                        name="content"
                        className={editing ? "MuiTypography-body1" : "hidden"}
                        defaultValue={content}
                    />
                </CardContent>
            </Card>

        </form >
    )
}

export default Content;


