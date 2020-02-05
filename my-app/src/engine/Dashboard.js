import React, { useState } from "react";

import FormChooser from "./formData/FormChooser";
import FormFields from "./formData/FormFields";
import FormRecipients from "./formData/FormRecipients";
import FormRules from "./formData/FormRules";

import OutlineView from "./display/OutlineView";

import { changeForm } from "../../actions";

import "./Dashboard.css";

const Dashboard = ({form, tree, formsAvailable, treesAvailable, changeForm}) => {

    return (
        <div className="dashboardContainer">
            <div className="sidebar">
                <FormChooser formsAvailable={formsAvailable} currentForm={form} changeForm={changeForm} />
                <FormRecipients form={form} />
                <FormFields form={form} />
                <FormRules form={form} />
            </div>
            <div className="ruleLayout">
                <OutlineView form={form} tree={tree} />
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
export default connect(mapStateToProps, {changeForm})(Dashboard);