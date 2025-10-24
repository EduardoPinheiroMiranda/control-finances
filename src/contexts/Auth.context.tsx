import { AuthContextType, ContextProviderProps, LoginData, SingUpData } from "@/@types/auth.context";
import { externalCalls } from "@/services/externalCalls";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import  AsyncStorage from "@react-native-async-storage/async-storage";


export const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const userDefault = { id: "", name: "", email: "", avatar: null };


export function AuthProvider({children}: ContextProviderProps){

	const [user, setUser] = useState(userDefault);
	const [loggedInUser, setLoggedInUser] = useState(false);
	const [loadingPage, setLoadingPage] = useState(false);


	useEffect(() => {

		async function getData(){

			try{

				const getToken = await AsyncStorage.getItem("userToken");
				if(!getToken){
					return;
				}

				
				setLoadingPage(true);
				externalCalls.defaults.headers["Authorization"] = `Bearer ${getToken}`;
				const response = await externalCalls.get("/user/getUserByToken");
				setUser({
					id: response.data.id,
					name: response.data.name,
					email: response.data.email,
					avatar: response.data.avatar
				});
				setLoggedInUser(true);
				setLoadingPage(false);

			}catch(err){
				console.log(err);
				setLoadingPage(false);
				setUser(userDefault);
				setLoggedInUser(false);
				await AsyncStorage.removeItem("userToken");
			}
		}

		getData();

	}, []);


	async function singIn(body: LoginData): Promise<string | void>{

		try{

			const response = await externalCalls.post("/user/authenticate", body);
			setUser(response.data);
			setLoggedInUser(true);
			await AsyncStorage.setItem("userToken", response.data.token);
			externalCalls.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;

		}catch(err){
			
			if(axios.isAxiosError(err)){
				if(err.status === 400){
					return err.response?.data.msg;
				}
			}
			
			return "Houve um pequeno problema, por favor tente novamente.";
		}

		return;
	}


	async function singUp(body: SingUpData){

		try{
			
			const response = await externalCalls.post("/user/userRegister", body);
			return {
				statusCode: response.status,
				msg: response.data.msg
			};

		}catch(err){
			console.log(err);
			if(axios.isAxiosError(err)){
				if(err.status === 400){
					return {
						statusCode: 400,
						msg: err.response?.data.msg
					};
					
				}
			}
			
			return {
				statusCode: 500,
				msg: "Houve um pequeno problema, por favor tente novamente."
			};
		}
	}


	return(
		<AuthContext.Provider value={{
			loggedInUser,
			loadingPage,
			user,
			singIn,
			singUp
		}}>
			{children}
		</AuthContext.Provider>
	);
}