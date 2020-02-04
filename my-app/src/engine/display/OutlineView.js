import React, { useState, useEffect } from "react";

const OutlineView = ({form}) => {

    const initialStates = {};

    initialStates["sales"] = {

        rule: {field: "quantity", operator: "is between", value: "5, 10"},
        yes: {
            rule: {field: "topic", operator: "is equal to", value: "delivery"},
            yes: {
                rule: {field: "date", operator: "contains", value: "January"},
                yes: { recipient: "Jonathan" },
                no: { }
                },
            no: {
                rule: {field: "supervisor", operator: "is equal to", value: "Bernd"},
                yes: { recipient: "Bernd" },
                no: { }
                }
            },
        no: {}
    }

    initialStates["billing"] = {

        rule: {field: "price", operator: "is less than", value: "100"},
        yes: {
            rule: {field: "agent", operator: "equal to", value: "Jason"},
            yes: { },
            no: {
                rule: {field: "state", operator: "contains", value: "Oklahoma"},
                yes: { },
                no: { recipient: "Alvin" }
                }
            },
        no: { recipient: "Tommy" }
    }

    initialStates["tech support"] = {

        rule: {field: "employeeId", operator: "is equal to", value: "E92374Q1"},
        yes: { },
        no: {
            rule: {field: "ticketNumber", operator: "is less than", value: "600"},
            yes: { },
            no: {
                rule: {field: "date", operator: "contains", value: "2018"},
                yes: { recipient: "Alyssa" },
                no: { recipient: "Katie" }
                }
            }
    }

    // const [formRoute, setFormRoute] = useState({});
    const [formRoute, setFormRoute] = useState(initialStates[form.name.toLowerCase()]);

    // change formRoute when the form changes
    useEffect(() => setFormRoute(initialStates[form.name.toLowerCase()]), [form]);

    const isEndNode = (node) => {
        return Array.isArray(node) || typeof node === "string" || !isNaN(node);
    }

    const isUnfinishedNode = (node) => {
        return Object.entries(node).length === 0;
    }

    const makeEndNode = () => {
        return <div className="dropArea">(drag a form field here, or drag a recipient here to finish.)</div>
    }

    const createRoute = (formRoute) => {

        // string or array found as a node
        if (isEndNode(formRoute))
            { return formRoute; }

        // empty object {} found as a node
        else if (isUnfinishedNode(formRoute))
            { return makeEndNode(); }

        // node contains a recipient
        else if (formRoute.recipient !== undefined)
            { return (
                <div className="ruleBox">
                    <div className="formRecipient">
                        Send to {formRoute.recipient}
                    </div>
                </div>
            ) }

        // node contains a rule and yes and no branches
        else
            {
                return (
                    <div className="ruleAndChoices">
                        <div className="ruleBox">
                            <div className="formRule">{formRoute.rule.field}</div>
                            <div className="formOperator">{formRoute.rule.operator}</div>
                            <div className="formValue">{formRoute.rule.value}</div>
                        </div>

                        <div className="choiceYes">
                            
                            <div className="yesTextParent">
                                <div className="yesNoText">
                                    <div className="verticalLine lineAboveYes"></div>
                                    Yes
                                </div>
                                <div className="lineBelowYesContainer">
                                    <div className="verticalLine lineBelowYes"></div>
                                </div>
                            </div>
                            <div className="rightArrowContainer">
                                <div className="horizontalLine"></div>
                                <div className="rightArrow"></div>
                            </div>
                            {createRoute(formRoute.yes)}
                        </div>
                    
                        <div className="choiceNo">
                            <div className="yesNoText">
                                <div className="verticalLine lineAboveNo"></div>
                                No
                            </div>
                            <div className="rightArrowContainer">
                                <div className="horizontalLine"></div>
                                <div className="rightArrow"></div>
                            </div>
                            {createRoute(formRoute.no)}
                        </div>
                            
                    </div>
                )
            }
    }

    return (
        <div className="outlineView">
            <h1>{form.name} Form Routing (outline view)</h1>
            {createRoute(formRoute)}
        </div>
    )
}

export default OutlineView;