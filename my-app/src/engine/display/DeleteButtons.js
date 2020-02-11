import React from "react";

const DeleteButtons = ({path, deleteTreeNodeAndChildren, clearRuleAtNode}) => {


    const handleClear = (event, path) => {
        event.stopPropagation();
        clearRuleAtNode(path);
    }
    const handleDelete = (event, path) => {
        event.stopPropagation();
        deleteTreeNodeAndChildren(path);
    }

    return (
        <div className="deleteButtons">
        <div className="clearContentsButton" title="Clear rule contents"
            onClick={event => handleClear(event, path)}>
            &#9003;
        </div>
        <div className="deleteNodeButton" title="Delete this rule and all choices stemming from this rule"
            onClick={event => handleDelete(event, path)}>
            🗑
        </div>
    </div>
    )
}

export default DeleteButtons;