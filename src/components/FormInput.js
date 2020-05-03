import React, { useState } from 'react';
import { Input, Button, Icon, Grid, Header, Form, Segment, Message } from 'semantic-ui-react'
import Success from './Success';




const FormInput = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const [isValidForm, setIsValidForm] = useState("");
    const [passwordIsHidden, setPasswordIsHidden] = useState(true);
    const [hasAnyError, setHasAnyError] = useState(false);


    function mailHandler(e) {
        setUserEmail(e.target.value)

    }
    function passwordHandler(e) {
        setUserPassword(e.target.value)
    }

    function clickHandler(e) {
        e.preventDefault();
        validation()
        setUserEmail("")
        setUserPassword("")

    }


    function validation() {
        let emptyObj = "";
        let regexChars = /\W|_/g;

        if (!userPassword.match(new RegExp("[A-Z]"))) emptyObj = " Password must contain at least 1 uppercase letter.";
        if (!userPassword.match(new RegExp(regexChars))) emptyObj = " Password must contain at least 1 special character.";
        if (!userPassword.match(new RegExp(/[0-9]/))) emptyObj = " Password must contain at least 1 number.";
        if (userPassword.length < 8) emptyObj = "Password must be least 8 characters long.";
        if (userPassword.includes(userEmail.split("@")[0])) emptyObj = "Password can not contain your e-mail name.";
        if (!userPassword) emptyObj = "Please type your password.";
        if (!userEmail.includes("@")) emptyObj = "Please type in valid e-mail.";
        if (!userEmail) emptyObj = "Please type your e-mail.";

        setHasAnyError(emptyObj && true)
        setIsValidForm(!emptyObj && true)
        setErrorMessage(emptyObj)

    }

    function showPassword() {
        setPasswordIsHidden(!passwordIsHidden)
    }
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Login to your account
      </Header>
                <Form size='large'>
                    <Segment raised>

                        <Form.Input iconPosition='left' placeholder='Email' value={userEmail}
                            onChange={mailHandler}>
                            <Icon name='at' />
                            <input />
                        </Form.Input>
                        <Form.Input type={passwordIsHidden ? "password" : "text"} iconPosition="left" placeholder='Password' value={userPassword} onChange={passwordHandler}>
                            <Icon name='eye' link="true" onClick={showPassword} />
                            <input />
                        </Form.Input>
                        {hasAnyError ? <Message>{errorMessage} </Message> : null}
                        <Button color="teal" onClick={clickHandler}>Click Here</Button>
                    </Segment>
                </Form>
                {isValidForm &&
                    <Success />}
            </Grid.Column>
        </Grid>
    );
};


export default FormInput;
