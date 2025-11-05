import { AuthContextType, ContextProviderProps, LoginData, SingUpData, User } from "@/@types/auth.context";
import { ExternalCalls } from "@/services/externalCalls";
import { createContext, useEffect, useState } from "react";
import  AsyncStorage from "@react-native-async-storage/async-storage";
import { axios, registerUnauthorizedHandler } from "@/libs/axios";


export const AuthContext = createContext<AuthContextType | undefined>(undefined);


export function AuthProvider({children}: ContextProviderProps){

	const [user, setUser] = useState<User | null>(null);
	const [loggedInUser, setLoggedInUser] = useState(false);
	const [loadingPage, setLoadingPage] = useState(false);

	const externalCalls = new ExternalCalls();
	

	useEffect(() => {

		async function startData(){
			setLoadingPage(true);
			await getData();
			setLoadingPage(false);
		}
		startData();
		
		registerUnauthorizedHandler(singOut);
	}, []);


	async function getData(){

		const userToken = await AsyncStorage.getItem("userToken");
		if(!userToken){
			return;
		}


		axios.defaults.headers["Authorization"] = `Bearer ${userToken}`;
		const response = await externalCalls.GET("/user/getUserByToken");
	

		if(!response.success){
			await AsyncStorage.removeItem("userToken");
			setUser(null);
			setLoggedInUser(false);
			return;
		}


		setUser({
			id: response.data.id,
			name: response.data.name,
			email: response.data.email,
			limit: Number(response.data.limit),
			dueDay: response.data.dueDay,
			closeDay: response.data.closeDay,
			avatar: response.data.avatar
		});
		setLoggedInUser(true);
		return;
	}


	async function singIn(body: LoginData): Promise<string | void>{

		const response = await externalCalls.POST("/user/authenticate", body);

		if(!response.success){
			return response.msg;
		}


		setUser(response.data);
		setLoggedInUser(true);
		await AsyncStorage.setItem("userToken", response.data.token);
		axios.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;

		return;
	}


	async function singUp(body: SingUpData){
		return await externalCalls.POST("/user/userRegister", body);
	}


	async function singOut(){
		await AsyncStorage.removeItem("userToken");
		setUser(null);
		setLoggedInUser(false);
		return;
	}


	return(
		<AuthContext.Provider value={{
			loggedInUser,
			loadingPage,
			user,
			singIn,
			singUp,
			singOut,
			getData
		}}>
			{children}
		</AuthContext.Provider>
	);
}