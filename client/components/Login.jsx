import { Field, reduxForm } from 'redux-form';
import React from 'react';

const Login = props => {
    return(
        <div className="login-form">
            <form className="inner-login-form">
                <Field
                    className="email-input"
                    name="email"
                    label="Email Address"
                    component="input"
                    type="text"
                />
                <Field
                    className="password-input"
                    name="password"
                    label="Password"
                    component="input"
                    type="text"
                />
                <button className="login-btn">LOG IN</button>
            </form>
        </div>
    )
}

export default reduxForm({ form: 'consultantLogin' })(Login);