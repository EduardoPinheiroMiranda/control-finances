export const listPurchaseTypes = [
    {
        label: "Definir compra como gasto fixo",
        value: "FIXED_EXPENSE"
    },
    {
        label: "Definir compra como gasto extra",
        value: "EXTRA_EXPENSE"
    }
];


export function listMethodPayment(hasCard){

    if(!hasCard){
        return [
            {label: "Boleto", value: "INVOICE"},
            {label: "Dinheiro", value: "MONEY"}
        ]
    }

    return [
        {label: "Cartão", value: "CARD"},
        {label: "Boleto", value: "INVOICE"},
        {label: "Dinheiro", value: "MONEY"},
    ]
}

export function listItems(items){

    return items.map((item) => {
        return {
            label: item.name,
            value: item.id
        }
    });
}