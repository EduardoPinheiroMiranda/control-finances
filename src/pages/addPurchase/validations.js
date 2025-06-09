
   
export function validations(
    name, typePurchase, methodPayment, price, installments,
    selectCard, dueDay, selectCategory, setOpenNotification
){

    if(methodPayment === "card"){
        if(!name || !typePurchase || !installments || !selectCard || !selectCategory){
            return{
                title: "Dados inválidos",
                description: "Preencha todos os campos que não são opcionais.",
                openNotification: true
            };
        }
    }

    if(methodPayment !== "card"){
        if(!name || !typePurchase || !methodPayment || !installments || !dueDay){
            return{
                title: "Dados inválidos",
                description: "Preencha todos os campos que não são opcionais.",
                openNotification: true
            }
        }
    }
    

    if(price <= 0){
        return{
            title: "Dados inválidos",
            description: "O valor da compra não pode ser inferior a 0.",
            openNotification: true
        }
    }

    if(installments <= 0){
        return{
            title: "Dados inválidos",
            description: "Cada compra deve ter no mínimo uma parcela.",
            openNotification: true
        }
    }

    if(dueDay <= 0 || dueDay > 31){
        return{
            title: "Dados inválidos",
            description: "Dia do vencimento invalido",
            openNotification: true
        }
    }
}