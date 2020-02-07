import React from "react";

export const renderTreeAsList = (treeToRender) => {

    const renderTree = (tree) => {

        // node only contains recipient
        if (tree.to)
            { return <span className="listTo">send to {tree.to}</span>; }

        // empty node
        else if (Object.keys(tree).length === 1)
            { return <span className="listTBD">{"TBD"}</span>; }
        
        // rule with two children
        else
            {
                return (
                    <>
                        <span className="listKey">{tree.rule.key}</span>
                        <span className="listOp">{tree.rule.op}</span>
                        <span className="listVal">{tree.rule.val}</span>
                        <ul>
                            <li>Yes: {renderTree(tree["1"])}</li>
                            <li>No: {renderTree(tree["0"])}</li>
                        </ul>
                    </>
                );
            }
    }

    return (

        <div className="treeAsList">

            <h2>{treeToRender.name}</h2>

            <ul>
                <li>
                    {renderTree(treeToRender.data)}
                </li>
            </ul>

        </div>
    )
}