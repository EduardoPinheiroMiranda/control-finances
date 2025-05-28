import { API_URL } from "@env";


export class ExternalCalls{

    constructor(){}


    async POST(url, token, body){

        try{

            const request = await fetch(
                `${API_URL}${url}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        ...(token && {"Authorization": `Bearer ${token}`})
                    },
                    ...(body && {body: JSON.stringify(body)})
                }
            );

            
            if(request.status === 500){
                throw new Error();
            }


            const response = await request.json();

            return {
                statusCode: request.status,
                response,
                msg: response.msg
            }

        }catch(err){
            return {
                statusCode: 500,
                msg: "Desculpe-nos, tivemos um erro inesperado. Tente novamente mais tarde."
            }
        }
    }

    async GET(url, token, params){

        try{

            if(params !== null){
                const queryParams = new URLSearchParams(params).toString();
                url = `${url}/${queryParams}`;
            }


            const request = await fetch(
                `${API_URL}${url}`,
                {
                    method: "GET",
                    headers: {
                        ...(token && {"Authorization": `Bearer ${token}`})
                    }
                }
            );

            
            if(request.status === 500){
                throw new Error();
            }


            const response = await request.json();

            return {
                statusCode: request.status,
                response,
                msg: response.msg
            }

        }catch(err){
            console.log(err);
            return {
                statusCode: 500,
                msg: "Desculpe-nos, tivemos um erro inesperado. Tente novamente mais tarde."
            }
        }
    }
}