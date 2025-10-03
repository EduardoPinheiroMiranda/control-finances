import Axios from "axios";


export const externalCalls =  Axios.create({
	baseURL: "http://10.0.0.115:3300"
});