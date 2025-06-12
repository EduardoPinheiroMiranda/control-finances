import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";


export class ExternalCalls{

    constructor(){}


    async request(method, url, useToken, body){

        let token = null;

        if(useToken){
            token = await AsyncStorage.getItem("userToken")
        }

        
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
                msg: response.error ? response.error.msg : ""
            }

        }catch(err){
            console.log(err)
            return {
                statusCode: 500,
                response: null,
                msg: "Desculpe-nos, tivemos um erro inesperado. Tente novamente mais tarde."
            }
        }
    }

    async POST(url, useToken, body){

        const { response, statusCode, msg} = await this.request("POST", url, useToken, body);

        return {
            response,
            statusCode,
            msg
        }
    }

    async GET(url, useToken, params){

        if(params !== null){
            const queryParams = new URLSearchParams(params).toString();
            url = `${url}/${queryParams}`;
        }
    
        const { response, statusCode, msg} = await this.request("GET", url, useToken, null);

        return {
            response,
            statusCode,
            msg
        }
    }

    async PUT(url, useToken, body){
    
        const { response, statusCode, msg} = await this.request("PUT", url, useToken, body);

        return {
            response,
            statusCode,
            msg
        }
    }
}