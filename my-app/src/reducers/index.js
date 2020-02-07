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
    
    DELETE_TREE_NODE_AND_CHILDREN,
    CLEAR_RULE_AT_NODE,
    UPDATE_RULE_AT_NODE,

    GET_ALL_FORMS,
    ADD_FORM,
    EDIT_FORM,
    DELETE_FORM

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

    case DELETE_TREE_NODE_AND_CHILDREN:
    {
        console.log("Reducer: deleting node and children at", action.payload)

        // root element; just clear it
        if (action.payload === "")
            { return {...state, tree: {...state.tree, data: { path: ""}},  } }
        
        let nodePath = action.payload.split("");

        let nodePathUpToParent = nodePath.slice(0, nodePath.length - 1);
        let childBranch = nodePath.slice(-1);

        let newTree = {...state.tree.data};
        let treeWalker = newTree; // create a pointer to traverse newTree

        // follow path to node
        for (let location of nodePathUpToParent)
            { treeWalker = treeWalker[location]; }

        // reset parent node to point to new child (empty except for path)
        treeWalker[childBranch] = { path: action.payload }

        return {...state, tree: {...state.tree, data: newTree }};
    }
    case CLEAR_RULE_AT_NODE:
    {
        console.log("Reducer: clearing rule at", action.payload)

        // root element; just clear it
        if (action.payload === "")
            { return {...state, tree: {...state.tree, data: { path: "", 0: state.tree.data["0"], 1: state.tree.data["1"] }},  } }
        
        let nodePath = action.payload.split("");

        let nodePathUpToParent = nodePath.slice(0, nodePath.length - 1);
        let childBranch = nodePath.slice(-1);

        let newTree = {...state.tree.data};
        let treeWalker = newTree; // create a pointer to traverse newTree

        // follow path to node
        for (let location of nodePathUpToParent)
            { treeWalker = treeWalker[location]; }

        // store reference to current child object
        let child = treeWalker[childBranch];

        // recreate child object, but leave out the "rule" property
        let newChild = { path: child.path, 0: child["0"], 1: child["1"]}

        console.log("newchild will be", newChild)

        // reset parent node to point to newChild
        treeWalker[childBranch] = newChild;

        return {...state, tree: {...state.tree, data: newTree }};
    }
    case UPDATE_RULE_AT_NODE:

        console.log("Reducer: updating rule at", action.payload)

        return {...state };
    
    // retrieve all forms from database and update formsAvailable
    case GET_ALL_FORMS:

        return {...state, formsAvailable: action.payload};

    case ADD_FORM:

        return {...state, formsAvailable: [...state.formsAvailable, action.payload]};

    case EDIT_FORM:

        return state;
    
    case DELETE_FORM:

        let currentForms = state.formsAvailable;
        let remainingForms = currentForms.filter(form => form["_id"] !== action.payload);

        return {...state, formsAvailable: remainingForms};

    default:

        return state;

    }
}