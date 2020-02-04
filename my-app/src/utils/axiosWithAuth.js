import axios from "axios";

export const axiosWithAuth = () => {

    return axios.create({
        baseURL: "https://build-4--rule-engine.herokuapp.com/api",
        headers: {authorization: localStorage.getItem("token")}
    })
}