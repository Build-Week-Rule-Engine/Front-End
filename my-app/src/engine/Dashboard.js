import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { generateRandomTree } from "../utils/generateRandomTree";
import { renderTreeAsList } from "../utils/renderTreeAsList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import { setCurrentTree, getAllForms, addForm, editForm, deleteForm } from "../actions";

import "./dashboard.css";

const Dashboard = ({ setCurrentTree, formsAvailable, getAllForms, addForm, editForm, deleteForm}) => {

    const [suggestedTree, setSuggestedTree] = useState(generateRandomTree());
    const suggestNewTree = () => setSuggestedTree(generateRandomTree());

    // const [allForms, setAllForms] = useState(undefined);
    const [isLoadingForms, setIsLoadingForms] = useState(false);

    useEffect(() => {

        setIsLoadingForms(true);
        getAllForms();

    }, [])

    console.log(formsAvailable, "are the forms available in state");


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
                <button onClick={() => setCurrentTree(suggestedTree)} className="proposal proposalEdit">Edit This Route</button>

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