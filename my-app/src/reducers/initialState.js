import { initialForms } from "./initialForms";
import { initialTrees } from "./initialTrees";

const initialState = {

    formsAvailable: initialForms,
    formId: initialForms[0].formId,
    formName: initialForms[0].name,

    treesAvailable: initialTrees,
    treeId: initialTrees[0].treeId,
    treeName: initialTrees[0].name,
    tree: initialTrees[0].tree,

    errorMessage: state.errorMessage,

};

export default initialState;