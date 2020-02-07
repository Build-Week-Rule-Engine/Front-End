import React from "react";
import { generateRandomTree } from "../utils/generateRandomTree";
import { renderTreeAsList } from "../utils/renderTreeAsList";

import "./dashboard.css";

const Dashboard = () => {

    const demoTrees = [];

    for (let i = 0; i < 2; i++)
        { demoTrees.push(generateRandomTree()); }

    return (
        <div className="userDashboard">
            <div className="allForms">
                <h2>forms</h2>
            </div>
            <div className="allTrees">
                <h2>trees</h2>

                {demoTrees.map(tree => renderTreeAsList(tree))}

            </div>
        </div>
    )
}

export default Dashboard;