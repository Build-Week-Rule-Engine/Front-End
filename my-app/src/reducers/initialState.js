import { initialForms } from "./initialForms";
import { initialTrees } from "./initialTrees";

const initialState = {

    formsAvailable: initialForms,
    form: initialForms[0],

    treesAvailable: initialTrees,
    tree: initialTrees[0],
    
    lastSelectedOption: {type: "", value: ""},

    errorMessage: "",

};

export default initialState;