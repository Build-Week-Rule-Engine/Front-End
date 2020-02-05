//replace ed1t with variables as desired

import React, { useHistory } from "react"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"

const LogInForm = (props) => {

  return (
    <>
      <div>
        <h1>LogIn</h1>
      </div>

      <Form >
        <div>
          <label htmlFor="username">Username</label>
          <Field
            id="username"
            type="text"
            name="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
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

    console.log(values, "to be submitted");

    axios
      .post("https://build-4--rule-engine.herokuapp.com/api/auth/sign-in", values)
      .then(res => {
        console.log(res)
        setStatus(res.data)
        resetForm()

        useHistory().push("/dashboard");

      })
      .catch(err => console.log(err))
  }
})(LogInForm)

export default FormikLogInForm 
