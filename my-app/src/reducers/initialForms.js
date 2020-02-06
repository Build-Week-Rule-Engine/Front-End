export const initialForms = [
    {
        name: "Sales",
        id: 0,
        to: ["Zach", "Tyrone", "Kayla", "Steffie", "Grant"],
        fields: ["product", "price", "agent", "date", "state"],
        rules: {
            number: ["is less than", "is equal to"],
            text: ["is equal to", "contains"],
        },
    },
    {
        name: "Billing",
        id: 1,
        to: ["Dan", "Chester", "Brendan", "Lillie", "Candace"],
        fields: ["accountNumber", "agent", "service", "date", "ticketNumber"],
        rules: {
            number: ["is greater than or equal to", "is greater than", "is equal to"],
            text: ["contains"],
        },
    },
    {
        name: "Tech Support",
        id: 2,
        to: ["Eunice", "Jordan", "Alyssa", "Katie", "June"],
        fields: ["employeeId", "supervisor", "category", "date", "ticketNumber"],
        rules: {
            number: ["is equal to", "is between"],
            text: ["is equal to"],
        },
    }
];