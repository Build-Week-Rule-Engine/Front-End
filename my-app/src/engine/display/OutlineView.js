import React, { useState, useEffect } from "react";
import DeleteButtons from "./DeleteButtons";

const OutlineView = ({form, treeData, lastSelectedOption, deleteTreeNodeAndChildren, clearRuleAtNode, updateRuleAtNode }) => {

    const isEndNode = (node) => {
        return Array.isArray(node) || typeof node === "string" || !isNaN(node);
    }

    const isUnfinishedNode = (node) => {

        return !node.rule; // rule property is missing
    }

    const hasChildren = (node) => {

        return node["0"]; // check if child nodes exist
    }

    const makeEndNode = () => {
        return <div className="dropArea">(drop a form field here, or drop a recipient here to finish.)</div>
    }

    const createRoute = (tree) => {

        // string or array found as a node
        if (isEndNode(tree))
            { return tree; }

        // node contains a recipient
        else if (tree.to !== undefined)
            { return (
                <div className="ruleBox">
                    <div className="formRecipient">
                        Send to {tree.to}
                    </div>
                    <DeleteButtons path={tree.path}
                        deleteTreeNodeAndChildren={deleteTreeNodeAndChildren}
                        clearRuleAtNode={clearRuleAtNode}
                        updateRuleAtNode={updateRuleAtNode}
                    />
                </div>
            ) }

        // // empty object {} found as a node
        else if (!hasChildren(tree))
            { return makeEndNode(); }

        // node contains a rule and yes and no branches
        else
            {
                return (
                    <div className="ruleAndChoices">

                        {
                            isUnfinishedNode(tree) ? makeEndNode() :
                        
                        <div className="ruleBox">
                            <div className="formRule">{tree.rule.key}</div>
                            <div className="formOperator">{tree.rule.op}</div>
                            <div className="formValue">{tree.rule.val}</div>
                            <DeleteButtons path={tree.path}
                                deleteTreeNodeAndChildren={deleteTreeNodeAndChildren}
                                clearRuleAtNode={clearRuleAtNode}
                                updateRuleAtNode={updateRuleAtNode}
                            />
                        </div>

                        }

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
                            {createRoute(tree[1])}
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
                            {createRoute(tree[0])}
                        </div>
                            
                    </div>
                )
            }
    }

    return (
        <div className="outlineView">
            {/* <h1>Route: {treeData.name} (Form ID: {treeData.formId})</h1>
            <h2>Last clicked on: {lastSelectedOption.type} - {lastSelectedOption.value}</h2> */}
            <h1>{treeData.name}</h1>
            {createRoute(treeData.data)}
        </div>
    )
}


export default OutlineView;