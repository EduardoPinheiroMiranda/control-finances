import { API_URL } from "@env";


export class ExternalCalls{

    constructor(){}


    async request(method, url, token, body){

        try{

            const request = await fetch(
                `${API_URL}${url}`,
                {
                    method: method,
                    headers: {
                        ...(body && {"Content-Type": "application/json"}),
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
                response: null,
                msg: "Desculpe-nos, tivemos um erro inesperado. Tente novamente mais tarde."
            }
        }
    }

    async POST(url, token, body){

        const { response, statusCode, msg} = await this.request("POST", url, token, body);

        return {
            response,
            statusCode,
            msg
        }
    }

    async GET(url, token, params){

        if(params !== null){
            const queryParams = new URLSearchParams(params).toString();
            url = `${url}/${queryParams}`;
        }
    
        const { response, statusCode, msg} = await this.request("GET", url, token, null);

        return {
            response,
            statusCode,
            msg
        }
    }
}