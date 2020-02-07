import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth";

export const FETCHING_USER_START = "FETCHING_USER_START";
export const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";
export const FETCHING_USER_FAILURE = "FETCHING_USER_FAILURE";

export const ADDING_USER_START = "ADDING_USER_START";
export const ADDING_USER_SUCCESS = "ADDING_USER_SUCCESS";
export const ADDING_USER_FAILURE = "ADDING_USER_FAILURE";

export const FETCHING_FORM_START = "FETCHING_FORM_START";
export const FETCHING_FORM_SUCCESS = "FETCHING_FORM_SUCCESS";
export const FETCHING_FORM_FAILURE = "FETCHING_FORM_FAILURE";

export const ADDING_FORM_START = "ADDING_FORM_START";
export const ADDING_FORM_SUCCESS = "ADDING_FORM_SUCCESS";
export const ADDING_FORM_FAILURE = "ADDING_FORM_FAILURE";

export const EDITING_FORM_START = "EDITING_FORM_START";
export const EDITING_FORM_SUCCESS = "EDITING_FORM_SUCCESS";
export const EDITING_FORM_FAILURE = "EDITING_FORM_FAILURE";

export const DELETING_FORM_START = "DELETING_FORM_START";
export const DELETING_FORM_SUCCESS = "DELETING_FORM_SUCCESS";
export const DELETING_FORM_FAILURE = "DELETING_FORM_FAILURE";

export const FETCHING_TREE_START = "FETCHING_TREE_START";
export const FETCHING_TREE_SUCCESS = "FETCHING_TREE_SUCCESS";
export const FETCHING_TREE_FAILURE = "FETCHING_TREE_FAILURE";

export const ADDING_TREE_START = "ADDING_TREE_START";
export const ADDING_TREE_SUCCESS = "ADDING_TREE_SUCCESS";
export const ADDING_TREE_FAILURE = "ADDING_TREE_FAILURE";

export const EDITING_TREE_START = "EDITING_TREE_START";
export const EDITING_TREE_SUCCESS = "EDITING_TREE_SUCCESS";
export const EDITING_TREE_FAILURE = "EDITING_TREE_FAILURE";

export const DELETING_TREE_START = "DELETING_TREE_START";
export const DELETING_TREE_SUCCESS = "DELETING_TREE_SUCCESS";
export const DELETING_TREE_FAILURE = "DELETING_TREE_FAILURE";

export const CHANGE_FORM = "CHANGE_FORM";

export const UPDATE_LAST_SELECTED_OPTION = "UPDATE_LAST_SELECTED_OPTION";

export const DELETE_TREE_NODE_AND_CHILDREN = "DELETE_TREE_NODE_AND_CHILDREN";
export const UPDATE_RULE_AT_NODE = "UPDATE_RULE_AT_NODE";
export const CLEAR_RULE_AT_NODE = "CLEAR_RULE_AT_NODE";

export const GET_ALL_FORMS = "GET_ALL_FORMS";
export const ADD_FORM = "ADD_FORM";
export const EDIT_FORM = "EDIT_FORM";
export const DELETE_FORM = "DELETE_FORM";

// export const SET_CURRENT_TREE = "SET_CURRENT_TREE";

export const addUser = (userData) => dispatch => {

    dispatch({ type: ADDING_USER_START});

    axios.post("https://build-4--rule-engine.herokuapp.com/auth/sign-up")
        .then(response => {

            console.log("About to add user:", response.data);

            dispatch({ type: ADDING_USER_SUCCESS, payload: response.data});
        })
        .catch(error => {

            console.log("Couldn't add user:", error);

            dispatch({ type: ADDING_USER_FAILURE, payload: error});
        })
}

export const updateLastSelectedOption = (option) => dispatch => {

    console.log("Action creator: just clicked on ", option)

    dispatch({ type: UPDATE_LAST_SELECTED_OPTION, payload: option});
}


export const changeForm = (form) => dispatch => {

    console.log("Action creator: changing form...", form)

    dispatch({ type: CHANGE_FORM, payload: form});
}

export const deleteTreeNodeAndChildren = (path) => dispatch => {

    console.log("Action creator: deleting node and its children...", path)

    dispatch({ type: DELETE_TREE_NODE_AND_CHILDREN, payload: path});
}

export const clearRuleAtNode = (path) => dispatch => {

    console.log("Action creator: clearing rule at...", path)

    dispatch({ type: CLEAR_RULE_AT_NODE, payload: path});
}

export const updateRuleAtNode = (path) => dispatch => {

    console.log("Action creator: updating rule at...", path)

    dispatch({ type: UPDATE_RULE_AT_NODE, payload: path});
}


export const getAllForms = () => dispatch => {

    console.log("Action creator: getting all forms...");

    axiosWithAuth()
    .get(`https://build-4--rule-engine.herokuapp.com/api/forms`)
    .then(response => {
        console.log("Forms returned from database:", response);

        dispatch({ type: GET_ALL_FORMS, payload: response.data});

    })
    .catch(error => {
        console.log("Error getting forms database:", error);

    })
}

export const addForm = () => dispatch => {

    console.log("Action creator: adding form...");

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

            dispatch({ type: ADD_FORM, payload: newForm});
        })
        .catch(error => {
            console.log("Error adding form to database:", error);

        })
 
}

export const editForm = (id, formData) => dispatch => {

    console.log("Action creator: Editing form...", id, formData);

    dispatch({ type: EDIT_FORM, payload: [id, formData]});
}

export const deleteForm = (id) => dispatch => {
    
    console.log("Action creator: Deleting form...", id);

    axiosWithAuth()
        .delete(`https://build-4--rule-engine.herokuapp.com/api/forms/${id}`)
        .then(response => {
            
            console.log("Deleted form from database:", response);
            console.log("Remaining forms:", response.data.data);

            dispatch({ type: DELETE_FORM, payload: id});        
        })
        .catch(error => {
            console.log("Error deleting form from database:", error);
        })
}
