import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case 'input':
            inputElement = (
                <input
                    name={props.name}
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    defaultValue={props.defaultValue}
                    onChange={props.changed}
                />
            );
            break;
        case 'textarea':
            inputElement = (
                <textarea
                    name={props.name}
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    defaultValue={props.defaultValue}
                    onChange={props.changed}
                    rows={props.rows || 2}
                />
            );
            break;
        default:
            inputElement = (
                <input
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
    }

    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = (
            <p className={classes.ValidationError}>
                Please enter a valid value!
            </p>
        );
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
};
export default Input;
