import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"


const PendingRequests = (props) => {

  const [forms, setForms] = useState([])
  const [filterForms, setFilterForms] = useState([])
  const [errorFound, setErrorFound] = useState(false)
  const [error, setError] = useState("")

  const CenterDiv = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  `

  useEffect(() => {
    axios
      .get(`https://build-4--rule-engine.herokuapp.com/api/forms`)
      .then(res => {
        setErrorFound(false)
        console.log("hey")
        console.log(res)
        setForms(res.data)
      })
      .catch(err => {
        let error = ""
        error += err;
        console.log("error", err.status)
        setErrorFound(true)
        setError(error)
        console.log(error, "error in catch")
      })
  }, [])

  console.log(error, "error")

  return (
    <CenterDiv>
      {errorFound ? (
        <div>
          <p>{error}</p>
        </div>
      ) : (

          forms.map(form => {
            return (
              <ul key={form._id}>
                <li>{form.data.name.value}</li>
                <li>{form.data.date.value}</li>
                <li>{form.data.company.value}</li>
              </ul>
            )
          })

        )}
    </CenterDiv>
  )


}

export default PendingRequests
