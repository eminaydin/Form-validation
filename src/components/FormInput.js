import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react'



const FormInput = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [isValidForm, setIsValidForm] = useState(false);

    /*    const upperCases = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
       const lowerCases = upperCases.toLowerCase();
       const numbers = `1234567890`;
       const specialChars = ` !"#%^&'()*+,-/;<=>?@[]\\_\`{}|~`; */



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
    console.log(errorMessage);

    function validation() {
        let emptyObj = "";
        let upperCases = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
        let lowerCases = upperCases.toLowerCase();
        let numbers = `1234567890`;
        let specialChars = ` !"#%^&'()*+,-/;<=>?@[]\\_\`{}|~`;

        if (userPassword.length <= 8) emptyObj = "Password should consist at least 8 characters."
        if (userPassword.includes(userEmail)) emptyObj = "Password can not contain the username.";
        if (!userPassword) emptyObj = "No password provided.";
        if (!userEmail.includes("@")) emptyObj = "Please type valid mail adress";
        if (!userEmail) emptyObj = "No email provided"

        setIsValidForm(!emptyObj && true)
        setErrorMessage(emptyObj)
    }
    return (
        <div className="form-wrapper">
            <form>
                <Form.Input
                    id='form-input-control-error-email'
                    control={Input}
                    placeholder='joe@schmoe.com'
                    value={userEmail}
                    onChange={mailHandler}
                />

                <Form.Input type='password' value={userPassword} onChange={passwordHandler} />
                {!isValidForm ? errorMessage : null}
                <Button onClick={clickHandler}>Click Here</Button>
            </form>

        </div>
    );
};


export default FormInput;
