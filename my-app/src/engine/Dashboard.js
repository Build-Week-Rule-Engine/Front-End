import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { generateRandomTree } from "../utils/generateRandomTree";
import { renderTreeAsList } from "../utils/renderTreeAsList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import { setCurrentTree, getAllForms, addForm, editForm, deleteForm } from "../actions";

import "./dashboard.css";

const Dashboard = ({ setCurrentTree, tree, formsAvailable, getAllForms, addForm, editForm, deleteForm}) => {

    const [suggestedTree, setSuggestedTree] = useState(generateRandomTree());
    const suggestNewTree = () => setSuggestedTree(generateRandomTree());

    // const [allForms, setAllForms] = useState(undefined);
    const [isLoadingForms, setIsLoadingForms] = useState(false);

    const [isEditingForm, setIsEditingForms] = useState(false);
    const [currentFormId, setCurrentFormId] = useState(undefined);
    
    const [userValue, setUserValue] = useState("");

    useEffect(() => {

        setIsLoadingForms(true);
        getAllForms();

    }, [])

    const handleEditTree = () => {
        setCurrentTree(suggestedTree);
        return <Redirect to="/dashboard/editor" />;
    }

    const handleChange = event => {

        setUserValue(event.target.value);
    }

    const handleSubmit = event => {

        console.log("current form id", currentFormId)

        event.preventDefault();
        editForm(currentFormId, userValue);
    }

    const toggleEdit = (formData) => {

        setIsEditingForms(!isEditingForm);
        setCurrentFormId(formData);

    }

    return (
        <div className="userDashboard">
            <div className="allForms">
                <h2>Current Forms</h2>

                <h3>
                    Below are all the forms in use at your organization.
                </h3>

                <button className="formAddButton" onClick={() => addForm()}>Add new form</button>

                {!formsAvailable || formsAvailable.length === 0 ? <p>Loading forms...</p> : 
                
                <div className="allFormsDisplay">
                    {formsAvailable.map(formData => {

                            return (

                                <div key={"form_" + formData["_id"]} className="singleFormRow">
                                    <button className="formEditButton" onClick={() => toggleEdit(formData)}>&#128393;</button>
                                    <p>{formData.name}</p>
                                    <button className="formDeleteButton" onClick={() => deleteForm(formData["_id"])}>🗑</button>
                                </div>

                            )})
                    }
                </div>

                }

                <div className="editFormContainer">
                    {
                        isEditingForm ?
                        <form name="edit">

                            <h3>Edit form name</h3>

                            <input name="name" onChange={handleChange} value={userValue} />
                            <button onClick={handleSubmit}>Edit name</button>
                        </form>
                        :
                        ""
                    }
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
                <button onClick={handleEditTree} className="proposal proposalEdit">Edit This Route</button>

                {renderTreeAsList(suggestedTree)}

            </div>
        </div>
    )
}


const mapStateToProps = (state) => {

    return {
        formsAvailable: state.formsAvailable,
        formId: state.formId,
        form: state.form,

        treesAvailable: state.treesAvailable,
        treeId: state.treeId,
        tree: state.tree,

        lastSelectedOption: state.lastSelectedOption,
        
        errorMessage: state.errorMessage,
    }
}


export default connect(mapStateToProps, { setCurrentTree, getAllForms, addForm, editForm, deleteForm })(Dashboard);