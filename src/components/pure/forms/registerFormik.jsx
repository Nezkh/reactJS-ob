import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();
    
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER,
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string().min(5, 'Username too short').max(16, 'Username too long').required('Username is required'),
            emial: Yup.string().email('Invalid email format').required('Email is required'),
            role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'Select you Role').required('Role is required'),
            password: Yup.string().min(8, 'Password too short').required('Password is required'),
            confirm: Yup.string().when("password", {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    '¡Passwords must match!'
                )
            }).required('You must confirm the password')
        }
    )

    const submit = () => {
        alert('Register user')
    }
    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues = { initialValues }
                // ** Yup validation Schema **
                validationSchema = {registerSchema}
                // ** onSubmit Event **
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
            {({ values, touched, errors, isSubmitting, handleChange, handleBlur}) => (
                <Form>
                    {/* Username errors */}
                    {
                        errors.username && touched.username && (
                                <ErrorMessage name="username" component='div'/>
                        )
                    }
                    <label htmlFor='username'>Username</label>
                    <Field id="username" type="text" name="username" placeholder="Your username" />

                    {/* Email errors */}
                    {
                        errors.email && touched.email && (
                                <ErrorMessage name="email" component='div'/>
                        )
                    }
                    <label htmlFor='email'>Email</label>
                    <Field id="email" type="email" name="email" placeholder="Your email" />

                    {/* Password Errors */}
                        {
                        errors.password && touched.password && (
                        <ErrorMessage name="password" component='div'/>
                        )
                    }
                    <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="Password"
                            type="password"
                        />

                        {/* Confirm Password Errors */}
                        {
                            errors.confirm && touched.confirm && (
                            <ErrorMessage name="confirm" component='div'/>
                            )
                        }
                    <label htmlFor="confirm">Confirm Password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="Confirm your password"
                            type="password"
                        />

                    <button type='submit'>Register Account</button>
                    {isSubmitting ? (<p>Creating your account...</p>): null}



                </Form>
            )}
            </Formik>
        </div>
    );
}

export default RegisterFormik;
