import React from "react"
import LogIn from "./Components/LogIn"
import SignUp from "./Components/SignUp"
import { Route, Link } from "react-router-dom"

const Account = (props) => {
  return (
    <>
      <div>
        <Link to={"/LogIn"}>
          <button>Log In</button>
        </Link>
        <Link to={"/SignUp"}>
          <button>Sign Up</button>
        </Link>
      </div>
      <Route path={"/LogIn"}>
        <LogIn />
      </Route>
      <Route path={"/SignUp"}>
        <SignUp />
      </Route>
    </>
  )
}

export default Account
