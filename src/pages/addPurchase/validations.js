

export function validations(params){

    const buttonsDefault = [{
        title: "Ok",
        action: () => params.closePopUp(false)
    }];


    if(params.methodPayment === "card"){
        if(
            !params.name || !params.typePurchase || !params.installments ||
            !params.selectCard || !params.selectCategory
        ){
            return{
                title: "Dados inválidos",
                description: "Preencha todos os campos que não são opcionais.",
                buttons: buttonsDefault,
            };
        }
    }

    if(params.methodPayment !== "card"){
        if(
            !params.name || !params.typePurchase || !params.methodPayment ||
            !params.installments || !params.dueDay
        ){
            return{
                title: "Dados inválidos",
                description: "Preencha todos os campos que não são opcionais.",
                buttons: buttonsDefault,
            };
        }
    }
    

    if(params.price <= 0){
        return{
            title: "Dados inválidos",
            description: "O valor da compra não pode ser inferior a 0.",
            buttons: buttonsDefault,
        };
    }

    if(params.installments <= 0){
        return{
            title: "Dados inválidos",
            description: "Cada compra deve ter no mínimo uma parcela.",
            buttons: buttonsDefault,
        };
    }

    if(params.methodPayment !== "card"){
        if( params.dueDay && params.dueDay <= 0 || params.dueDay > 31){
            return{
                title: "Dados inválidos",
                description: "Dia do vencimento invalido",
                buttons: buttonsDefault,
            };
        }
    }
    

    const body = {
        name: params.name,
        typeInvoice: params.typePurchase,
        paymentMethod: params.methodPayment,
        value: params.price,
        totalInstallments: params.installments,
        description: params.description,
        dueDay: params.methodPayment === "card" ? null : params.dueDay,
        categoryId: params.selectCategory,
        cardId: params.methodPayment === "card" ? params.selectCard : null,
        purchaseDate: params.datePurchase
    };


    return{
        title: "Atenção",
        description: "Verifique todos os dados antes de enviá-los, e garanta que está tudo certo.",
        buttons: [
            {title: "Revisar", action: () => params.closePopUp(false)},
            {title: "Continuar", action: () => {
                params.closePopUp(false);
                params.execute(body);
            }}
        ]
    };
}