import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom";

import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"
import styled from "styled-components"

const SignUpForm = ({ canRedirect, values, errors, touched, status }) => {

  const CenterH1 = styled.h1`
      text-align: center;
  `

  const [success, setSuccess] = useState(false)

  let successtoo = true
  // use usesState to change the div to say that you succesfully signed up

  useEffect(() => {
    status && setSuccess(true)
  }, [status])

  // redirect to dashboard if login is successful
  if (canRedirect)
    { return <Redirect to="/dashboard" />; }

  return (
    <>
      <div>
        <CenterH1>SignUp</CenterH1>
      </div>

      <Form >
        <div>
          <label htmlFor="username">Username: </label>
          <Field
            id="username"
            type="text"
            name="username"
            placeholder="username"
          />
          {touched.username && errors.username && (
            <p>{errors.username}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <Field
            id="email"
            type="email"
            name="email"
            placeholder="email"
          />
          {touched.email && errors.email && (
            <p>{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <Field
            id="password"
            type="password"
            name="password"
            placeholder="password"
          />
          {touched.password && errors.password && (
            <p>{errors.password}</p>
          )}
        </div>
        <div>
          <label htmlFor="passwordReEnter">Re-enter Password: </label>
          <Field
            id="passwordReEnter"
            type="password"
            name="passwordReEnter"
            placeholder="passwordReEnter"
          />
          {touched.passwordReEnter && errors.passwordReEnter && (
            <p>{errors.passwordReEnter}</p>
          )}
        </div>
        <div>
          <label htmlFor="company">Company: </label>
          <Field
            id="company"
            type="text"
            name="company"
            placeholder="company"
          />
          {touched.company && errors.company && (
            <p>{errors.company}</p>
          )}
        </div>
        <div>
          <label htmlFor="ToS">
            Accept the Terms of Service
            <Field id="checkbox" type="checkbox" name="ToS" checked={values.ToS} />
          </label>
        </div>
        <button type="submit">
          Sign up
        </button>
        {success ? (
          <p> Sign up successful! </p>
        ) : (<></>)}
      </Form>
    </>
  )
}

const FormikSignUpForm = withFormik({
  mapPropsToValues(props) {
    return {
      username: props.username || "",
      email: props.email || "",
      password: props.password || "",
      passwordReEnter: props.passwordReEnter || "",
      company: props.company || "",
      ToS: props.ToS || false,
      setCanRedirect: props.setCanRedirect
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
    passwordReEnter: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    company: Yup.string().required(),
    ToS: Yup.boolean().required()
  }),

  handleSubmit(values, { setStatus, resetForm }) {

    let setCanRedirect = values.setCanRedirect;

    let valuesToInput = {
      email: values.email,
      username: values.username,
      password: values.password
    }

    console.log("signing up with", valuesToInput)

    axios
      .post("https://build-4--rule-engine.herokuapp.com/auth/sign-up", valuesToInput)
      .then(res => {
        console.log(res)

        // store token in localStorage
        localStorage.setItem("token", res.data.token);
        
        setCanRedirect(true);

      })
      .catch(err => {
        console.log("Error signing up:", err);
        
        })
  }

})(SignUpForm)

export default FormikSignUpForm 
