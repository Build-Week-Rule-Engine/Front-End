import React from "react";

import FormChooser from "./formData/FormChooser";
import FormFields from "./formData/FormFields";
import FormRecipients from "./formData/FormRecipients";
import FormRules from "./formData/FormRules";

import OutlineView from "./display/OutlineView";

const Dashboard = () => {

    

    return (
        <div>
            <div className="sidebar">
                <FormChooser />
                <FormFields />
                <FormRecipients />
                <FormRules />
            </div>
            <div className="ruleLayout">
                <OutlineView />
            </div>

        </div>
    )
}

export default Dashboard;