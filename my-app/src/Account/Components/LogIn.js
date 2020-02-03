//replace ed1t with variables as desired


import React from "react"

const LogIn = (props) => {

  let ed1t = ""

  // const submitForm = e => {
  //   e.preventDefault();
  //   axios
  //     .push (
  //       //Edit this for a correct push
  //     )
  // }

  return (
    <>
      <div>
        <h1>LogIn</h1>
      </div>


      <form onSubmit={ed1t}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            value={ed1t}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={ed1t}
          />
        </div>
        <button onClick={ed1t}>
          Log In
      </button>
      </form>
    </>
  )
}

export default LogIn
