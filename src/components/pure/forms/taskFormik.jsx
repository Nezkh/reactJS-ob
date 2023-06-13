import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CLIENT } from '../../../models/client.enum';
import { PROJECT } from '../../../models/project.enum';

const TaskFormik = () => {
    
    
    const initialValues = {
        client: '',
        project: '',
        task: '',
        user: '',
        hours: '',
    }

    const registerSchema = Yup.object().shape(
        {
            client: Yup.string().required('Client is required'),
            project: Yup.string().required('Project is required'),
            task: Yup.string().required('Task is required'),
            user: Yup.string().required('User is required'),
            hours: Yup.string().required('Hours is required'),
        }

    )
    
    return (
        <div>
            <h4>Task Form</h4>
            <Formik
            initialValues={ initialValues }
            validationSchema={registerSchema}
            >
            {({ values, touched, errors, isSubmitting, handleChange, handleBlur}) => (
                <Form>
                    {
                        errors.client && touched.client && (
                                <ErrorMessage name="client" component='div'/>
                        )
                    }
                    <label htmlFor='client'>Client</label>
                    <Field as="select" id="client" type="text" name="client" placeholder="Select Client">
                    <option value="" style={{ display: 'none' }}>Select Client</option>
                    {CLIENT.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </Field>

                    {
                        errors.project && touched.project && (
                                <ErrorMessage name="project" component='div'/>
                        )
                    }
                    <label htmlFor='project'>Project</label>
                    <Field as="select" id="project" type="text" name="project" placeholder="Select Project">
                    <option value="" style={{ display: 'none' }}>Select Project</option>
                    {PROJECT.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </Field>

                    {
                        errors.task && touched.task && (
                                <ErrorMessage name="task" component='div'/>
                        )
                    }
                    <label htmlFor='task'>Task</label>
                    <Field id="task" type="text" name="task" placeholder="Introduce Task Description"/>

                    {
                        errors.user && touched.user && (
                                <ErrorMessage name="user" component='div'/>
                        )
                    }
                    <label htmlFor='user'>User</label>
                    <Field id="user" type="text" name="user" placeholder="Your User"/>

                    {
                        errors.hours && touched.hours && (
                                <ErrorMessage name="hours" component='div'/>
                        )
                    }
                    <label htmlFor='hours'>Hours</label>
                    <Field id="hours" type= "time" name="hours" placeholder="Entry Your Time"/>

                    <button type='submit'>Enter Time</button>
                    {isSubmitting ? (<p>Creating your task...</p>): null}
                </Form>
            )}
            </Formik>
        </div>
    );
}

export default TaskFormik;
