import React, { useState, useEffect } from "react";

const OutlineView = ({form, treeData}) => {

    const isEndNode = (node) => {
        return Array.isArray(node) || typeof node === "string" || !isNaN(node);
    }

    const isUnfinishedNode = (node) => {
        return Object.entries(node).length === 1; // only one property is present, the pathToNode array
    }

    const makeEndNode = () => {
        return <div className="dropArea">(drag a form field here, or drag a recipient here to finish.)</div>
    }

    const createRoute = (tree) => {

        // string or array found as a node
        if (isEndNode(tree))
            { return tree; }

        // empty object {} found as a node
        else if (isUnfinishedNode(tree))
            { return makeEndNode(); }

        // node contains a recipient
        else if (tree.recipient !== undefined)
            { return (
                <div className="ruleBox">
                    <div className="formRecipient">
                        Send to {tree.recipient}
                    </div>
                </div>
            ) }

        // node contains a rule and yes and no branches
        else
            {
                return (
                    <div className="ruleAndChoices">
                        <div className="ruleBox">
                            <div className="formRule">{tree.rule.field}</div>
                            <div className="formOperator">{tree.rule.operator}</div>
                            <div className="formValue">{tree.rule.value}</div>
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
                            {createRoute(tree.yes)}
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
                            {createRoute(tree.no)}
                        </div>
                            
                    </div>
                )
            }
    }

    return (
        <div className="outlineView">
            <h1>Route: {treeData.treeName} ({treeData.formName} form)</h1>
            {createRoute(treeData.tree)}
        </div>
    )
}


export default OutlineView;