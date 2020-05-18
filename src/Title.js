import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import { AiOutlineSave, AiOutlineClose, AiFillEdit } from "react-icons/ai";
import "./Title.css";

const Title = (props) => {
    const handleEditMode = (edit) => {
        props.setEditing(edit);
        props.setChecked(false);
    };

    return (<div className={(props.editMode ? "root edit" : "root")} >
        <div className="view">
            <h3>{props.title}</h3>
            <IconButton onClick={() => handleEditMode(true)}>  <AiFillEdit />
            </IconButton>
            <Checkbox
                color="primary"
                checked={props.checked}
                onChange={props.handler}
            />
        </div>
        <div className="editor"><input
            type="text"
            name="title"
            defaultValue={props.title}
        />
            <IconButton type=
                "submit" >  <AiOutlineSave />
            </IconButton>
            <IconButton type="reset" onClick={() => handleEditMode(false)}>
                < AiOutlineClose /></IconButton>
        </div>
    </div>);
}
export default Title;