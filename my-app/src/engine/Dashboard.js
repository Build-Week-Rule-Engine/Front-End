import React, { useEffect, useState } from "react";
import { generateRandomTree } from "../utils/generateRandomTree";
import { renderTreeAsList } from "../utils/renderTreeAsList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import "./dashboard.css";

const Dashboard = () => {

    const [suggestedTree, setSuggestedTree] = useState(generateRandomTree());
    const suggestNewTree = () => setSuggestedTree(generateRandomTree());

    const [allForms, setAllForms] = useState(undefined);
    const [isLoadingForms, setIsLoadingForms] = useState(false);

    useEffect(() => {

        setIsLoadingForms(true);

        axiosWithAuth()
            .get(`https://build-4--rule-engine.herokuapp.com/api/forms`)
            .then(response => {
                console.log("Forms returned from database:", response);

                setAllForms(response.data);
                setIsLoadingForms(false);

            })
            .catch(error => {
                console.log("Error getting forms database:", error);

            })


    }, [])

    const editForm = (id) => {

        return;
    }

    const deleteForm = (id) => {

        console.log("attempting to delete with id", id)

        axiosWithAuth()
            .delete(`https://build-4--rule-engine.herokuapp.com/api/forms/${id}`)
            .then(response => {
                console.log("Deleted form from database:", response);

                console.log("Remaining forms:", response.data.data);

                // store remaining forms in state
                let remainingForms = allForms.filter(form => form["_id"] !== id);

                setAllForms(remainingForms);
            })
            .catch(error => {
                console.log("Error deleting form from database:", error);

            })
    }

    const addForm = () => {

        const newForm = {
            name: "New Form",
            data: {
                to: ["recipient"],
                fields: ["field"],
                rules: {
                    number: ["is equal to"],
                    text: ["contains"],
                }
            }
        }

        axiosWithAuth()
            .post(`https://build-4--rule-engine.herokuapp.com/api/forms/`, newForm)
            .then(response => {
                console.log("Added form to database:", response);

                setAllForms([...allForms, response.data]);
            })
            .catch(error => {
                console.log("Error adding form to database:", error);

            })
    }


    return (
        <div className="userDashboard">
            <div className="allForms">
                <h2>Current Forms</h2>

                <h3>
                    Below are all the forms in use at your organization.
                </h3>

                <button className="formAddButton" onClick={() => addForm()}>Add new form</button>

                {!allForms || isLoadingForms ? <p>Loading forms...</p> : 
                
                <div className="allFormsDisplay">
                    {allForms.map(formData => {

                            console.log(formData);

                            return (

                                <div key={"form_" + formData["_id"]} className="singleFormRow">
                                    <button className="formEditButton" onClick={() => editForm(formData["_id"])}>&#128393;</button>
                                    <p>{formData.name}</p>
                                    <button className="formDeleteButton" onClick={() => deleteForm(formData["_id"])}>🗑</button>
                                </div>

                            )})
                    }
                </div>

                }

                <div className="editFormContainer">

                </div>

            </div>
            <div className="allTrees">
                <h2>Suggested Routes</h2>

                <h3>
                    The route below was proposed by your organization's HR department.
                </h3>

                <p>
                    Click "Edit This Route" to refine the route, or click "Get Another Route" to see another suggested route.
                </p>

                
                <button onClick={suggestNewTree} className="proposal proposalAnother">Get Another Route</button>
                <button onClick={suggestNewTree} className="proposal proposalEdit">Edit This Route</button>

                {renderTreeAsList(suggestedTree)}

            </div>
        </div>
    )
}

export default Dashboard;