import React from "react"

const SignUp = (props) => {

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
        <h1>SignUp</h1>
      </div>

      <form onSubmit={ed1t}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            value={ed1t}
            placeholder="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={ed1t}
            placeholder="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={ed1t}
            placeholder="password"
          />
        </div>
        <div>
          <label htmlFor="passwordReEnter">Re-enter Password</label>
          <input
            id="passwordReEnter"
            type="password"
            name="passwordReEnter"
            value={ed1t}
            placeholder="passwordReEnter"
          />
        </div>
        <div>
          <label htmlFor="company">Password</label>
          <input
            id="company"
            type="text"
            name="company"
            value={ed1t}
            placeholder="company"
          />
        </div>
        <button onClick={ed1t}>
          Log In
        </button>
      </form>
    </>
  )
}

export default SignUp
