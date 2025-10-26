import Axios from "axios";


export const externalCalls =  Axios.create({
	baseURL: "http://10.0.0.108:3300"
});