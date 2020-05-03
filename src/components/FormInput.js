import React, { useState } from 'react';
import { Input, Button, Icon } from 'semantic-ui-react'
import Success from './Success';




const FormInput = (props) => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [isValidForm, setIsValidForm] = useState(false);
    const [passwordIsHidden, setPasswordIsHidden] = useState(true);


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

        if (!userPassword.match(new RegExp("[A-Z]"))) emptyObj = " password should contain at least 1 uppercase";
        if (!userPassword.match(new RegExp(regexChars))) emptyObj = " password should contain at least 1 specialChar";
        if (!userPassword.match(new RegExp(/[0-9]/))) emptyObj = " password should contain at least 1 number";
        if (userPassword.length < 8) emptyObj = "Password should contain at least 8 characters.";
        if (userPassword.includes(userEmail.split("@")[0])) emptyObj = "Password can not contain username.";
        if (!userPassword) emptyObj = "No password provided.";
        if (!userEmail.includes("@")) emptyObj = "Please type valid mail adress";
        if (!userEmail) emptyObj = "No email provided";

        setIsValidForm(!emptyObj && true)
        setErrorMessage(emptyObj)



    }

    function showPassword() {
        setPasswordIsHidden(!passwordIsHidden)
    }
    return (
        <div className="form-wrapper">
            <form className="form-div">

                <Input iconPosition='left' placeholder='Email' value={userEmail}
                    onChange={mailHandler}>
                    <Icon name='at' />
                    <input />
                </Input>
                <Input type={passwordIsHidden ? "password" : "text"} iconPosition="left" placeholder='Password' value={userPassword} onChange={passwordHandler}>
                    <Icon name='eye' link="true" onClick={showPassword} />
                    <input />
                </Input>
                {!isValidForm ? errorMessage : null}
                <Button onChange={clickHandler}>Click Here</Button>
            </form>
            {isValidForm &&
                <Success />}
        </div>
    );
};


export default FormInput;
