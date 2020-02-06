import React from "react"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Navbar = (props) => {

  const FlexDiv = styled.div`
    display: flex
    justify-content: space-evenly;
    width: 60%;
    margin: 0 auto;
  `
  return (
    <FlexDiv>
      <Link to={"/Account/SignUp"}>
        <p>
          Register
        </p>
      </Link>
      <Link to={"/Account/LogIn"}>
        <p>
          Log In
        </p>
      </Link>
      <Link to={"/Dashboard"}>
        <p>
          Dashboard
        </p>
      </Link>
      <Link to={"/PendingRequests"}>
        <p>
          Incoming requests
        </p>
      </Link>
    </FlexDiv>
  )
}

export default Navbar
