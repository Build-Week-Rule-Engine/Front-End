import React from "react";

const renderTreeAsList = (tree) => {

    const renderTree = (tree) => {

        // node only contains recipient
        if (tree.to)
            { return <ul><li>{tree.to}</li></ul>; }

        // empty node
        else if (Object.keys(tree).length === 1)
            { return <ul><li>{"TBD"}</li></ul>; }
        
        // rule with two children
        else
            {
                return (
                    <ul>
                        <li>
                            <span className="listLey">{tree.name}</span>
                            <span className="listOp">{tree.op}</span>
                            <span className="listVal">{tree.val}</span>
                        </li>

                        <ul>
                            <li>{renderTreeAsList(tree["0"])}</li>
                            <li>{renderTreeAsList(tree["1"])}</li>
                        </ul>
                    </ul>
                );
            }
    }

    return (

        <div className="treeAsList">

            <h2>{tree.name}</h2>

            {renderTreeAsList(tree)}

        </div>
    )
}

export default renderTreeAsList;