import React from 'react';
import { Button, Grid } from '@material-ui/core';
import Input from '../Input/Input';
import { connect } from 'react-redux';
import { login } from '../../store/actions/authActions';
import { useHistory } from 'react-router-dom';

const SignIn = ({ onLogin }) => {
    const adminUserName = 'testAdmin@gmail.com';
    const adminPassword = '12345yuiopp';

    const history = useHistory();
    const [signinForm, setSignInForm] = React.useState({
        userName: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Username',
            },
            value: '',
            validation: {
                required: true,
                expression: /\S+@\S+\.\S+/,
            },
            valid: false,
            touched: false,
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Password',
            },
            value: '',
            validation: {
                required: true,
                minLength: 8,
                expression: /([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*/,
            },
            valid: false,
            touched: false,
        },
    });
    const [formIsValid, setFormIsValid] = React.useState(false);

    const formElementsArray = [];
    for (let key in signinForm) {
        formElementsArray.push({
            id: key,
            config: signinForm[key],
        });
    }

    const inputChangeHandler = (event, inputIdentifier) => {
        const updatedSigninForm = { ...signinForm };
        const updatedFormElement = { ...updatedSigninForm[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation,
        );
        updatedFormElement.touched = true;
        updatedSigninForm[inputIdentifier] = updatedFormElement;
        let formIsValid = true;
        for (let inputIdentifier in updatedSigninForm) {
            formIsValid =
                updatedSigninForm[inputIdentifier].valid && formIsValid;
        }
        setFormIsValid(formIsValid);
        setSignInForm(updatedSigninForm);
    };

    const signInHandler = (event) => {
        event.preventDefault();
        const isAdmin =
            signinForm.userName.value === adminUserName &&
            signinForm.password.value === adminPassword;
        onLogin(
            signinForm.userName.value,
            signinForm.password.value,
            isAdmin,
        ).then(() => history.push('/'));
    };

    const checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.expression) {
            isValid = rules.expression.test(value) && isValid;
        }

        return isValid;
    };

    return (
        <Grid
            container
            justify="center"
            spacing={0}
            direction="column"
            alignItems="center"
            style={{ minHeight: '70vh' }}>
            <form onSubmit={signInHandler}>
                {formElementsArray.map((formElement) => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        label={formElement.config.elementConfig.placeholder}
                        invalid={!formElement.config.valid}
                        touched={formElement.config.touched}
                        shouldValidate={formElement.config.validation}
                        changed={(event) =>
                            inputChangeHandler(event, formElement.id)
                        }
                    />
                ))}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: 10 }}
                    disabled={!formIsValid}>
                    Sign in
                </Button>
            </form>
        </Grid>
    );
};

const mapDispatchToProps = {
    onLogin: login,
};

export default connect(null, mapDispatchToProps)(SignIn);
