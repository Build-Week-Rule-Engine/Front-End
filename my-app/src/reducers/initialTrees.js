export const initialTrees = [

    {
        formId: 1,
        
        name: "sales tree #1",
        id: 1,
        data:
            {
                path: "",
                rule: {key: "quantity", op: "is between", val: "5, 10"},
                1: {
                path: "1",
                    rule: {key: "topic", op: "is equal to", val: "delivery"},
                    1: {
                    path: "11",
                        rule: {key: "date", op: "contains", val: "January"},
                        1: {
                                path: "110",
                                to: "Jonathan" },
                        0: { path: "110" }
                        },
                    0: {
                        path: "10",
                        rule: {key: "supervisor", op: "is equal to", val: "Bernd"},
                        1: {
                        path: "101",
                            to: "Bernd"
                        },
                        0: { path: "100" }
                        }
                    },
                0: { path: "10" }
            }
    },

    {
        formId: 2,
        
        name: "billing tree #1",
        id: 2,
        data:
            {
                path: "",
                rule: {key: "price", op: "is less than", val: "100"},
                1: {
                    path: "1",
                    rule: {key: "agent", op: "equal to", val: "Jason"},
                    1: { path: "11", },
                    0: {
                        path: "10",
                        rule: {key: "state", op: "contains", val: "Oklahoma"},
                        1: { path: "101" },
                        0: {
                            path: "100",
                            to: "Alvin"
                            }
                        }
                    },
                0: {
                        path: "0",
                        to: "Tommy"
                    }
                }
    },

    {
        formId: 3,
        
        name: "tech support tree #1",
        id: 3,
        data:
            {
                path: "",
                rule: {key: "employeeId", op: "is equal to", val: "E92374Q1"},
                1: { path: "0" },
                0: {
                    path: "0",
                    rule: {key: "ticketNumber", op: "is less than", val: "600"},
                    1: { path: "01" },
                    0: {
                        path: "00",
                        rule: {key: "date", op: "contains", val: "2018"},
                        1: {
                            path: "001",
                            to: "Alyssa"
                        },
                        0: {
                            path: "000",
                            to: "Katie"
                            }
                        }
                    }
            }
    }
];