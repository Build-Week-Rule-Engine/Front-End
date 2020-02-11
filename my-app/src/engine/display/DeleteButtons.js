import React from "react";

const DeleteButtons = ({path, deleteTreeNodeAndChildren, clearRuleAtNode}) => {

    return (
        <div className="deleteButtons">
        <div className="clearContentsButton" title="Clear rule contents"
            onClick={() => clearRuleAtNode(path)}>
            &#9003;
        </div>
        <div className="deleteNodeButton" title="Delete this rule and all choices stemming from this rule"
            onClick={() => deleteTreeNodeAndChildren(path)}>
            🗑
        </div>
    </div>
    )
}

export default DeleteButtons;