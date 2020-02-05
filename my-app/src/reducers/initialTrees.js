export const initialTrees = [

    {
        formName: "sales",
        formId: 1,
        
        treeName: "sales tree #1",
        treeId: 1,
        tree:
            {
                rule: {field: "quantity", operator: "is between", value: "5, 10"},
                yes: {
                    rule: {field: "topic", operator: "is equal to", value: "delivery"},
                    yes: {
                        rule: {field: "date", operator: "contains", value: "January"},
                        yes: { recipient: "Jonathan" },
                        no: { }
                        },
                    no: {
                        pathToNode: [1, 1, 0],
                        rule: {field: "supervisor", operator: "is equal to", value: "Bernd"},
                        yes: { recipient: "Bernd" },
                        no: { }
                        }
                    },
                no: {}
            }
    },

    {
        formName: "billing",
        formId: 2,
        
        treeName: "billing tree #1",
        treeId: 2,
        tree:
            {
                rule: {field: "price", operator: "is less than", value: "100"},
                yes: {
                rule: {field: "agent", operator: "equal to", value: "Jason"},
                yes: { },
                no: {
                    rule: {field: "state", operator: "contains", value: "Oklahoma"},
                    yes: { },
                    no: { recipient: "Alvin" }
                    }
                },
            no: { recipient: "Tommy" }
            }
    },

    {
        formName: "tech support",
        formId: 3,
        
        treeName: "tech support tree #1",
        treeId: 3,
        tree:
            {
                rule: {field: "employeeId", operator: "is equal to", value: "E92374Q1"},
                yes: { },
                no: {
                    rule: {field: "ticketNumber", operator: "is less than", value: "600"},
                    yes: { },
                    no: {
                        rule: {field: "date", operator: "contains", value: "2018"},
                        yes: { recipient: "Alyssa" },
                        no: { recipient: "Katie" }
                        }
                    }
            }
    }
];