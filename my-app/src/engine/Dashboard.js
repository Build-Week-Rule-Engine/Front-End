import React, { useState } from "react";

import FormChooser from "./formData/FormChooser";
import FormFields from "./formData/FormFields";
import FormRecipients from "./formData/FormRecipients";
import FormRules from "./formData/FormRules";

import OutlineView from "./display/OutlineView";

const Dashboard = () => {

    const initialForms = [
        {
            name: "Sales",
            recipients: ["Zach", "Tyrone", "Kayla", "Steffie", "Grant"],
            rules: {
                number: ["is less than", "is equal to"],
                text: ["is equal to", "contains"],
            },
        },
        {
            name: "Billing",
            recipients: ["Dan", "Chester", "Brendan", "Lillie", "Candace"],
            rules: {
                number: ["is greater than or equal to", "is greater than", "is equal to"],
                text: ["contains"],
            },
        },
        {
            name: "Tech Support",
            recipients: ["Eunice", "Jordan", "Alyssa", "Katie", "June"],
            rules: {
                number: ["is equal to", "is between"],
                text: ["is equal to"],
            },
        }
    ]

    const [currentForm, setCurrentForm] = useState(initialForms.sales);

    return (
        <div>
            <div className="sidebar">
                <FormChooser forms={initialForms} currentForm={currentForm} setCurrentForm={setCurrentForm} />
                <FormFields form={currentForm} />
                <FormRecipients form={currentForm} />
                <FormRules form={currentForm} />
            </div>
            <div className="ruleLayout">
                <OutlineView form={currentForm} />
            </div>

        </div>
    )
}

export default Dashboard;