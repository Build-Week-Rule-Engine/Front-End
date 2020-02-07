import React from "react";

export const renderTreeAsList = (treeToRender) => {

    const renderTree = (tree) => {

        console.log("current tree is", tree);

        // node only contains recipient
        if (tree.to)
            { return <span className="listTo">{tree.to}</span>; }

        // empty node
        else if (Object.keys(tree).length === 1)
            { return <span className="listTBD">{"TBD"}</span>; }
        
        // rule with two children
        else
            {
                return (
                    <ul>
                        <li>
                            <span className="listKey">{tree.rule.key}</span>
                            <span className="listOp">{tree.rule.op}</span>
                            <span className="listVal">{tree.rule.val}</span>
                        </li>

                        <ul>
                            <li>{renderTree(tree["0"])}</li>
                            <li>{renderTree(tree["1"])}</li>
                        </ul>
                    </ul>
                );
            }
    }

    return (

        <div className="treeAsList">

            <h2>{treeToRender.name}</h2>

            {renderTree(treeToRender.data)}

        </div>
    )
}