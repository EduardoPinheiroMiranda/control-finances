export const listPurchaseTypes = [
    {
        label: "Definir compra como gasto fixo",
        value: "fixedExpense"
    },
    {
        label: "Definir compra como gasto extra",
        value: "extraExpense"
    }
];


export const listMethodPayment = [
    {
        label: "Cartão",
        value: "card"
    },
    {
        label: "Boleto",
        value: "invoice"
    },
    {
        label: "Dinheiro",
        value: "money"
    },
];


export function listItems(items){

    return items.map((item) => {
        return {
            label: item.name,
            value: item.id
        }
    });
}