import { axios } from "@/libs/axios"
import { isAxiosError } from "axios";


export class ExternalCalls {
	
	constructor(){};

	private async errorValidation(err: unknown){
		if(isAxiosError(err)){
			return {
				success: false,
				data: err.response?.data,
				msg: err.response?.data.msg,
			}
		}
		
		return {
			success: false,
			data: {},
			msg: "Houve um pequeno problema para carregar os dados, tente novamente mais tarde."
		}
	}

	async POST(url: string, body: any){
		try{

			const request = await axios.post(url, body);
			const response = request.data;

			return {
				success: true,
				data: response,
				msg: ""
			}

		}catch(err){
			return this.errorValidation(err);
		}
	}

	async GET(url: string){
		try{

			const request = await axios.get(url);
			const response = request.data;

			return {
				success: true,
				data: response,
				msg: ""
			}

		}catch(err){
			return this.errorValidation(err);
		}
	}
}