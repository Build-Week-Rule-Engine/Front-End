//replace ed1t with variables as desired

import React from "react"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"
import styled from "styled-components"

const LogInForm = (props) => {

  const CenterH1 = styled.h1`
      text-align: center;
  `

  return (
    <>
      <div>
        <CenterH1>LogIn</CenterH1>
      </div>

      <Form >
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
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log(res)
        setStatus(res.data)
        resetForm()
      })
      .catch(err => console.log(err))
  }
})(LogInForm)

export default FormikLogInForm 
