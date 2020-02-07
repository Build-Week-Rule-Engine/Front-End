import React, { useEffect, useState } from "react";
import { generateRandomTree } from "../utils/generateRandomTree";
import { renderTreeAsList } from "../utils/renderTreeAsList";

import "./dashboard.css";

const Dashboard = () => {

    const [suggestedTree, setSuggestedTree] = useState(generateRandomTree());
    const suggestNewTree = () => setSuggestedTree(generateRandomTree());

    return (
        <div className="userDashboard">
            <div className="allForms">
                <h2>forms</h2>
            </div>
            <div className="allTrees">
                <h2>Suggested Routes</h2>

                <h3>
                    The route below was proposed by your organization's HR department.
                </h3>

                <p>
                    Click "Edit This Route" to refine the route, or click "Get Another Route" to see another suggested route.
                </p>

                
                <button onClick={suggestNewTree} className="proposal proposalAnother">Get Another Route</button>
                <button onClick={suggestNewTree} className="proposal proposalAnother">Edit This Route</button>

                {renderTreeAsList(suggestedTree)}

            </div>
        </div>
    )
}

export default Dashboard;