import React, { useState } from "react";

import FormChooser from "./formData/FormChooser";
import FormFields from "./formData/FormFields";
import FormRecipients from "./formData/FormRecipients";
import FormRules from "./formData/FormRules";

import OutlineView from "./display/OutlineView";

import "./Dashboard.css";

const Dashboard = () => {

    return (
        <div className="dashboardContainer">
            <div className="sidebar">
                <FormChooser forms={initialForms} currentForm={currentForm} setCurrentForm={setCurrentForm} />
                <FormRecipients form={currentForm} />
                <FormFields form={currentForm} />
                <FormRules form={currentForm} />
            </div>
            <div className="ruleLayout">
                <OutlineView form={currentForm} />
            </div>

        </div>
    )
}

export default Dashboard;

