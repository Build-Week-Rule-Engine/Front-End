export const initialForms = [
    {
        formName: "Sales",
        formId: 0,
        recipients: ["Zach", "Tyrone", "Kayla", "Steffie", "Grant"],
        fields: ["product", "price", "agent", "date", "state"],
        rules: {
            number: ["is less than", "is equal to"],
            text: ["is equal to", "contains"],
        },
    },
    {
        formName: "Billing",
        formId: 1,
        recipients: ["Dan", "Chester", "Brendan", "Lillie", "Candace"],
        fields: ["accountNumber", "agent", "service", "date", "ticketNumber"],
        rules: {
            number: ["is greater than or equal to", "is greater than", "is equal to"],
            text: ["contains"],
        },
    },
    {
        formName: "Tech Support",
        formId: 2,
        recipients: ["Eunice", "Jordan", "Alyssa", "Katie", "June"],
        fields: ["employeeId", "supervisor", "category", "date", "ticketNumber"],
        rules: {
            number: ["is equal to", "is between"],
            text: ["is equal to"],
        },
    }
];