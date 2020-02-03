import React from "react"
import LogIn from "./Components/LogIn"
import SignUp from "./Components/SignUp"
import { Route, Link } from "react-router-dom"

const Account = (props) => {
  return (
    <>
      <div>
        <Link to={"/Account/LogIn"}>
          <button>Log In</button>
        </Link>
        <Link to={"/Account/SignUp"}>
          <button>Sign Up</button>
        </Link>
      </div>
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
