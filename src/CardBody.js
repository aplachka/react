import React from "react";
import { CardContent, Typography } from "@material-ui/core";


const CardBody = (props) => {

    return (
        <CardContent>

            {props.editMode ?
                <input
                    type="text"
                    name="content"
                    className="MuiTypography-body1"
                    defaultValue={props.text}
                /> :
                <Typography component="p" >
                    {props.text}
                </Typography>

            }
        </CardContent>
    )

}
export default CardBody;