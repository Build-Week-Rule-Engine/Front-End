import {
    FETCHING_USER_START,
    FETCHING_USER_SUCCESS,
    FETCHING_USER_FAILURE,

    ADDING_USER_START,
    ADDING_USER_SUCCESS,
    ADDING_USER_FAILURE,

    FETCHING_FORM_START,
    FETCHING_FORM_SUCCESS,
    FETCHING_FORM_FAILURE,

    ADDING_FORM_START,
    ADDING_FORM_SUCCESS,
    ADDING_FORM_FAILURE,

    EDITING_FORM_START,
    EDITING_FORM_SUCCESS,
    EDITING_FORM_FAILURE,

    DELETING_FORM_START,
    DELETING_FORM_SUCCESS,
    DELETING_FORM_FAILURE,

    FETCHING_TREE_START,
    FETCHING_TREE_SUCCESS,
    FETCHING_TREE_FAILURE,

    ADDING_TREE_START,
    ADDING_TREE_SUCCESS,
    ADDING_TREE_FAILURE,

    EDITING_TREE_START,
    EDITING_TREE_SUCCESS,
    EDITING_TREE_FAILURE,

    DELETING_TREE_START,
    DELETING_TREE_SUCCESS,
    DELETING_TREE_FAILURE,

    CHANGE_FORM,
    SET_CURRENT_TREE,

    UPDATE_LAST_SELECTED_OPTION,
    DELETE_TREE_NODE

} from "../actions";

import initialState from "./initialState";

export const reducer = (state = initialState, action) => {
    
    switch (action.type) {

    case FETCHING_USER_START:

        return;

    case FETCHING_USER_SUCCESS:

        return;

    case FETCHING_USER_FAILURE:

        return;


    case ADDING_USER_START:

        return;

    case ADDING_USER_SUCCESS:

        return;

    case ADDING_USER_FAILURE:

        return;


    case FETCHING_FORM_START:

        return;

    case FETCHING_FORM_SUCCESS:

        return;

    case FETCHING_FORM_FAILURE:

        return;


    case ADDING_FORM_START:

        return;

    case ADDING_FORM_SUCCESS:

        return;

    case ADDING_FORM_FAILURE:


        return;

    case EDITING_FORM_START:

        return;

    case EDITING_FORM_SUCCESS:

        return;

    case EDITING_FORM_FAILURE:

        return;


    case DELETING_FORM_START:

        return;

    case DELETING_FORM_SUCCESS:

        return;

    case DELETING_FORM_FAILURE:

        return;


    case FETCHING_TREE_START:

        return;

    case FETCHING_TREE_SUCCESS:

        return;

    case FETCHING_TREE_FAILURE:

        return;


    case ADDING_TREE_START:

        return;

    case ADDING_TREE_SUCCESS:

        return;

    case ADDING_TREE_FAILURE:

        return;


    case EDITING_TREE_START:

        return;

    case EDITING_TREE_SUCCESS:

        return;

    case EDITING_TREE_FAILURE:

        return;


    case DELETING_TREE_START:

        return;

    case DELETING_TREE_SUCCESS:

        return;

    case DELETING_TREE_FAILURE:

        return;

    case CHANGE_FORM:

        return {...state, form: action.payload};

    case UPDATE_LAST_SELECTED_OPTION:

        console.log("Reducer: user last clicked on", action.payload)

        return {...state, lastSelectedOption: action.payload};

    case DELETE_TREE_NODE:

        return {...state };

    default:

        return state;

    }
}