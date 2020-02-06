import React from "react"
import LogIn from "./Components/LogIn"
import SignUp from "./Components/SignUp"
import { Route, Link } from "react-router-dom"
import styled from "styled-components"

const Account = (props) => {

  const CenterDiv = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  `

  return (
    <>
      <CenterDiv>
        <Link to={"/Account/LogIn"}>
          <button>Log In</button>
        </Link>
        <Link to={"/Account/SignUp"}>
          <button>Sign Up</button>
        </Link>
      </CenterDiv>
      <Route path={"/Account/LogIn"}>
        <LogIn />
      </Route>
      <Route path={"/Account/SignUp"}>
        <SignUp />
      </Route>
    </>
  )
}

export default Account
