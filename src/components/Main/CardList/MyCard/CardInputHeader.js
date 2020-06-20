import React from 'react';
import Input from '../../../Input/Input';

const CardInputHeader = (props) => {
    const inputChangeHandler = (event) => {
        const updatedTitle = { ...props.title };
        updatedTitle.value = event.target.value;
        updatedTitle.valid = checkValidity(
            updatedTitle.value,
            updatedTitle.validation,
        );
        updatedTitle.touched = true;

        props.onSetTitle(updatedTitle);
    };

    const checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        return isValid;
    };

    return (
        <Input
            elementType={props.title.elementType}
            elementConfig={props.title.elementConfig}
            validation={props.title.validation}
            name="title"
            defaultValue={props.titleValue}
            invalid={!props.title.valid}
            touched={props.title.touched}
            shouldValidate={props.title.validation}
            changed={(event) => inputChangeHandler(event)}
        />
    );
};

export default CardInputHeader;
