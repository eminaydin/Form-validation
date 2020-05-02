import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react'


const FormInput = () => {
    return (
        <div className="form-wrapper">
            <Form.Field
                id='form-input-control-error-email'
                control={Input}
                label='Email'
                placeholder='joe@schmoe.com'
                error={{
                    content: 'Please enter a valid email address',
                    pointing: 'below',
                }}
            />
            <Form.Input label='Enter Password' type='password' />
            <Button>Click Here</Button>
        </div>
    );
};


export default FormInput;
