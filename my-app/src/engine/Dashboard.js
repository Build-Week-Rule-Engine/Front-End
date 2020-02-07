import React, { useEffect, useState } from "react";
import { generateRandomTree } from "../utils/generateRandomTree";
import { renderTreeAsList } from "../utils/renderTreeAsList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import "./dashboard.css";

const Dashboard = () => {

    const [suggestedTree, setSuggestedTree] = useState(generateRandomTree());
    const suggestNewTree = () => setSuggestedTree(generateRandomTree());

    const [allForms, setAllForms] = useState(undefined);
    const [isLoadingForms, setIsLoadingForms] = useState(false);

    useEffect(() => {

        setIsLoadingForms(true);

        axiosWithAuth()
            .get(`https://build-4--rule-engine.herokuapp.com/api/forms`)
            .then(response => {
                console.log("Forms returned from database:", response);

                setAllForms("test");
                setIsLoadingForms(false);

            })
            .catch(error => {
                console.log("Error getting forms database:", error);

            })


    }, [])

    return (
        <div className="userDashboard">
            <div className="allForms">
                <h2>Current Forms</h2>

                <h3>
                    Below are all the forms in use at your organization.
                </h3>

                {!allForms || isLoadingForms ? "Loading forms..." : "forms!"}

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