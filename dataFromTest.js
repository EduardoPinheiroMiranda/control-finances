export const moviments = [
    {
        id: "1",
        method: "card",
        credit: true,
        cardName: "Mercado pago",
        title: "Roupas",
        date: "12/04/2001",
        value:  150,
        installments: "3x"
    },
    {
        id: "2",
        method: "invoice",
        credit: false,
        cardName: "Mercado pago",
        title: "Conta de água",
        date: "12/04/2001",
        value:  300,
        installments: ""
    },
    {
        id: "3",
        method: "invoice",
        credit: false,
        cardName: "Mercado pago",
        title: "Internet",
        date: "12/04/2001",
        value:  250,
        installments: ""
    },
    {
        id: "4",
        method: "card",
        credit: true,
        cardName: "Nubanck",
        title: "Farmacia",
        date: "12/04/2001",
        value:  100,
        installments: "2x"
    },
    {
        id: "5",
        method: "invoice",
        credit: false,
        cardName: "Mercado pago",
        title: "IPTU",
        date: "12/04/2001",
        value:  800,
        installments: ""
    },
    {
        id: "6",
        method: "money",
        credit: false,
        cardName: "Mercado pago",
        title: "Uber",
        date: "12/04/2001",
        value: 50,
        installments: ""
    },
    {
        id: "7",
        method: "money",
        credit: false,
        cardName: "Mercado pago",
        title: "Barbeiro",
        date: "12/04/2001",
        value:  500,
        installments: ""
    },
    {
        id: "8",
        method: "invoice",
        credit: false,
        cardName: "Mercado pago",
        title: "Conta de luz",
        date: "12/04/2001",
        value: 50,
        installments: ""
    },
    {
        id: "9",
        method: "money",
        credit: false,
        cardName: "Mercado pago",
        title: "Uber",
        date: "12/04/2001",
        value: 50,
        installments: ""
    },
    {
        id: "10",
        method: "money",
        credit: false,
        cardName: "Mercado pago",
        title: "Barbeiro",
        date: "12/04/2001",
        value:  500,
        installments: ""
    },
    {
        id: "11",
        method: "invoice",
        credit: false,
        cardName: "Mercado pago",
        title: "Conta de luz",
        date: "12/04/2001",
        value: 50,
        installments: ""
    },
    {
        id: "12",
        method: "invoice",
        credit: false,
        cardName: "Banco do brasil",
        title: "Conta de água",
        date: "12/04/2001",
        value:  300,
        installments: ""
    },
    {
        id: "13",
        method: "invoice",
        credit: false,
        cardName: "Nubanck",
        title: "Internet",
        date: "12/04/2001",
        value:  250,
        installments: ""
    },
    {
        id: "14",
        method: "card",
        credit: true,
        cardName: "Mercado pago",
        title: "Farmacia",
        date: "12/04/2001",
        value:  100,
        installments: "2x"
    },
    {
        id: "15",
        method: "invoice",
        credit: false,
        cardName: "Mercado pago",
        title: "IPTU",
        date: "12/04/2001",
        value:  800,
        installments: ""
    },     
];


export const summary = [
    {
        id: "1",
        type: "card",
        name: "Nubank",
        value: 1000,
        expired: "12/04",
        pay: false
    },
    {
        id: "2",
        type: "card",
        name: "Mercado pago",
        value: 1000,
        expired: "12/04",
        pay: false
    },
    {
        id: "3",
        type: "card",
        name: "Pick pay",
        value: 1000,
        expired: "12/04",
        pay: false
    },
    {
        id: "4",
        type: "fixedExpense",
        name: "Plano de telefone",
        value: 100.12,
        expired: "12/04",
        pay: false
    },
    {
        id: "5",
        type: "fixedExpense",
        name: "Internet - wifi",
        value: 50.78,
        expired: "12/04",
        pay: false
    },
    {
        id: "6",
        type: "fixedExpense",
        name: "Netflix",
        value: 300,
        expired: "12/04",
        pay: false
    },
    {
        id: "7",
        type: "fixedExpense",
        name: "Conta de luz",
        value: 100,
        expired: "12/04",
        pay: false
    },
    {
        id: "8",
        type: "extraExpense",
        name: "Parque",
        value: 1400,
        expired: "12/04",
        pay: false
    },
    {
        id: "9",
        type: "extraExpense",
        name: "Roupas",
        value: 100,
        expired: "12/04",
        pay: false
    },
    {
        id: "10",
        type: "extraExpense",
        name: "Tapetes",
        value: 1000.67,
        expired: "12/04",
        pay: false
    },
    {
        id: "11",
        type: "extraExpense",
        name: "Doc. Moto",
        value: 10.5,
        expired: "12/04",
        pay: false
    },
    {
        id: "12",
        type: "extraExpense",
        name: "Lanche",
        value: 350.2,
        expired: "12/04",
        pay: false
    }
];


export const invoices = [
    {
        id: "1",
        expired: "OUT/2024",
        pay: true,
        values: {
            invoiceValue: 25000,
            limit: 4000,
            available: 1500
        },
        movements: summary
    },
    {
        id: "2",
        expired: "NOV/2024",
        pay: true,
        values: {
            invoiceValue: 2600,
            limit: 4000,
            available: 1400
        },
        movements: summary
    },
    {
        id: "3",
        expired: "DEZ/2024",
        pay: true,
        values: {
            invoiceValue: 2700,
            limit: 4000,
            available: 1300
        },
        movements: summary
    },
    {
        id: "4",
        expired: "JAN/2025",
        pay: true,
        values: {
            invoiceValue: 2800,
            limit: 4000,
            available: 1200
        },
        movements: summary
    },
    {
        id: "5",
        expired: "FEV/2025",
        pay: false,
        values: {
            invoiceValue: 2900,
            limit: 4000,
            available: 1100
        },
        movements: summary
    },
    {
        id: "6",
        expired: "MAR/2025",
        pay: false,
        values: {
            invoiceValue: 3000,
            limit: 4000,
            available: 1000
        },
        movements: summary
    },
    {
        id: "7",
        expired: "ABR/2025",
        pay: false,
        values: {
            invoiceValue: 1550,
            limit: 4000,
            available: 1450
        },
        movements: summary
    },
    {
        id: "8",
        expired: "MAIO/2025",
        pay: false,
        values: {
            invoiceValue: 2740,
            limit: 4000,
            available: 1260
        },
        movements: summary
    },
    
    
]


