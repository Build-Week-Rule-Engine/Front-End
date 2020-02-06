import React from "react";
import { Redirect } from "react-router-dom";

const Logout = () => {

    // clear localStorage token to log user out
    localStorage.removeItem("token");

    return (
        <Redirect to="/" />
    )
}

export default Logout;