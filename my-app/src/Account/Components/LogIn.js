import React from "react"
import { Redirect } from "react-router-dom";

import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"
import styled from "styled-components"

const LogInForm = (props) => {

  // redirect to dashboard if login is successful
  if (props.canRedirect)
    { return <Redirect to="/dashboard" />; }

  const CenterH1 = styled.h1`
      text-align: center;
  `

  return (
    <>
      <div>
        <CenterH1>LogIn</CenterH1>
      </div>

      <Form test="test">
        <div>
          <label htmlFor="username">Username: </label>
          <Field
            id="username"
            type="text"
            name="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <Field
            id="password"
            type="password"
            name="password"
          />
        </div>
        <button type="submit">
          Log In
        </button>
      </Form>
    </>
  )
}

const FormikLogInForm = withFormik({

  mapPropsToValues(props) {
    return {
      username: props.username || "",
      password: props.password || "",
      setCanRedirect: props.setCanRedirect
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  }),

  handleSubmit(values, { setStatus, resetForm }) {

    let setCanRedirect = values.setCanRedirect;
    let loginInfo = { username: values.username, password: values.password };

    console.log("to be submitted", loginInfo);

    axios
      .post("https://build-4--rule-engine.herokuapp.com/auth/sign-in", loginInfo)
      .then(res => {
        console.log(res)
        setStatus(res.data)
        resetForm()

        // store token in localStorage
        localStorage.setItem("token", res.data.token);

        setCanRedirect(true);

      })
      .catch(err => {
        console.log("Error logging in:", err);
        
        })

  }

})(LogInForm)

export default FormikLogInForm 
