import React, { useState } from 'react';
import { Form, Input, Button, Icon } from 'semantic-ui-react'



const FormInput = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [isValidForm, setIsValidForm] = useState(false);


    function mailHandler(e) {
        setUserEmail(e.target.value)
    }
    function passwordHandler(e) {
        setUserPassword(e.target.value)
    }

    function clickHandler(e) {
        e.preventDefault();
        setUserEmail("")
        setUserPassword("")
        validation()
    }


    function validation() {
        let emptyObj = "";
        let regexChars = /\W|_/g;

        if (!userPassword.match(new RegExp("[A-Z]"))) emptyObj = " password should contain at least 1 uppercase";
        if (!userPassword.match(new RegExp(regexChars))) emptyObj = " password should contain at least 1 specialChar";
        if (!userPassword.match(new RegExp(/[0-9]/))) emptyObj = " password should contain at least 1 number";
        if (!userPassword.length < 8) emptyObj = "Password should contain at least 8 characters.";
        if (userPassword.includes(userEmail.split("@")[0])) emptyObj = "Password can not contain username.";
        if (!userPassword) emptyObj = "No password provided.";
        if (!userEmail.includes("@")) emptyObj = "Please type valid mail adress";
        if (!userEmail) emptyObj = "No email provided";

        setIsValidForm(!emptyObj && true)
        setErrorMessage(emptyObj)
    }
    return (
        <div className="form-wrapper">
            <form className="form-div">

                <Input iconPosition='left' placeholder='Email' value={userEmail}
                    onChange={mailHandler}>
                    <Icon name='at' />
                    <input />
                </Input>
                <Input type='password' value={userPassword} onChange={passwordHandler} />
                {!isValidForm ? errorMessage : null}
                <Button onClick={clickHandler}>Click Here</Button>
            </form>

        </div>
    );
};


export default FormInput;
