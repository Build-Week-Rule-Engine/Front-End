import React, { useState } from "react";
import { connect } from "react-redux";

import FormChooser from "./formData/FormChooser";
import FormFields from "./formData/FormFields";
import FormRecipients from "./formData/FormRecipients";
import FormRules from "./formData/FormRules";

import OutlineView from "./display/OutlineView";

import { changeForm, updateLastSelectedOption, deleteTreeNodeAndChildren, clearRuleAtNode, updateRuleAtNode } from "../actions";
// import { setAsCurrentField } from "./formData/sidebarFunctions";

import "./TreeEditor.css";

const TreeEditor = ({form, tree, formsAvailable, treesAvailable, changeForm, updateLastSelectedOption, lastSelectedOption, deleteTreeNodeAndChildren, clearRuleAtNode, updateRuleAtNode }) => {

    return (
        <div className="treeEditorContainer">
            <div className="sidebar">
                <FormChooser formsAvailable={formsAvailable} form={form} changeForm={changeForm} />
                <FormRecipients form={form} updateLastSelectedOption={updateLastSelectedOption} />
                <FormFields form={form} updateLastSelectedOption={updateLastSelectedOption}/>
                <FormRules form={form} updateLastSelectedOption={updateLastSelectedOption}/>
            </div>
            <div className="ruleLayout">
                <OutlineView form={form} treeData={tree}
                lastSelectedOption={lastSelectedOption}
                deleteTreeNodeAndChildren={deleteTreeNodeAndChildren}
                clearRuleAtNode={clearRuleAtNode}
                updateRuleAtNode={updateRuleAtNode} />
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

export default connect(mapStateToProps, {changeForm, updateLastSelectedOption, deleteTreeNodeAndChildren, clearRuleAtNode, updateRuleAtNode })(TreeEditor);