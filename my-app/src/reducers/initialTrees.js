export const initialTrees = [

    {
        formName: "sales",
        formId: 1,
        
        treeName: "sales tree #1",
        treeId: 1,
        tree:
            {
                pathToNode: [],
                rule: {field: "quantity", operator: "is between", value: "5, 10"},
                yes: {
                    pathToNode: [1],
                    rule: {field: "topic", operator: "is equal to", value: "delivery"},
                    yes: {
                        pathToNode: [1, 1],
                        rule: {field: "date", operator: "contains", value: "January"},
                        yes: {
                                pathToNode: [1, 1, 0],
                                recipient: "Jonathan" },
                        no: { pathToNode: [1, 1, 0] }
                        },
                    no: {
                        pathToNode: [1, 0],
                        rule: {field: "supervisor", operator: "is equal to", value: "Bernd"},
                        yes: {
                            pathToNode: [1, 0],
                            recipient: "Bernd"
                        },
                        no: { pathToNode: [1, 1, 0] }
                        }
                    },
                no: { pathToNode: [1, 1, 0] }
            }
    },

    {
        formName: "billing",
        formId: 2,
        
        treeName: "billing tree #1",
        treeId: 2,
        tree:
            {
                pathToNode: [],
                rule: {field: "price", operator: "is less than", value: "100"},
                yes: {
                    pathToNode: [1],
                    rule: {field: "agent", operator: "equal to", value: "Jason"},
                    yes: { pathToNode: [1, 1], },
                    no: {
                        pathToNode: [1, 0],
                        rule: {field: "state", operator: "contains", value: "Oklahoma"},
                        yes: { pathToNode: [1, 0, 1] },
                        no: {
                            pathToNode: [1, 0, 0],
                            recipient: "Alvin"
                            }
                        }
                    },
                no: {
                        pathToNode: [0],
                        recipient: "Tommy"
                    }
                }
    },

    {
        formName: "tech support",
        formId: 3,
        
        treeName: "tech support tree #1",
        treeId: 3,
        tree:
            {
                pathToNode: [],
                rule: {field: "employeeId", operator: "is equal to", value: "E92374Q1"},
                yes: { pathToNode: [1] },
                no: {
                    pathToNode: [0],
                    rule: {field: "ticketNumber", operator: "is less than", value: "600"},
                    yes: { pathToNode: [0, 1],},
                    no: {
                        pathToNode: [0, 0],
                        rule: {field: "date", operator: "contains", value: "2018"},
                        yes: {
                            pathToNode: [0, 0, 1],
                            recipient: "Alyssa"
                        },
                        no: {
                            pathToNode: [0, 0, 0],
                            recipient: "Katie"
                            }
                        }
                    }
            }
    }
];