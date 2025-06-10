export function checkCallAnswers({response, closePopUp, signOut}){

    if(response.statusCode === 401){
        return {
            title: "Sessão expirada",
            description: "Para garantir a segurança dos seus dados, refaça seu login e tente novamente.",
            buttons: [{
                title: "Ok",
                action: async () => {
                    closePopUp(false);
                    await signOut()
                }
            }]
        };
    }

    if(response.statusCode !== 201){
        return {
            title: "Ops...",
            description: response.msg,
            buttons: [{
                title: "Ok",
                action: () => closePopUp(false)
            }]
        };
    }
    

    return {
        title: "Sucesso!!",
        description: response.msg || "Informações recebidas e adicionadas.",
        buttons: [{
            title: "Ok",
            action: () => closePopUp(false)
        }]
    };
}