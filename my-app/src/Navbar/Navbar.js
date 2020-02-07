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

      { !localStorage.getItem("token") ?

        <>
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
        </>
      
      :
      <>
        <Link to={"/Dashboard"}>
          <p>
            Dashboard
          </p>
        </Link>
        <Link to={"/Dashboard/editor"}>
          <p>
            Editor
          </p>
        </Link>
        <Link to={"/PendingRequests"}>
          <p>
            Incoming requests
          </p>
        </Link>
        <Link to={"/LogOut"}>
          <p>
            Log Out
          </p>
        </Link>
      </>

      }
    </FlexDiv>
  )
}

export default Navbar
