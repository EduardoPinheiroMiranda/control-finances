import { AuthContextType, AuthProviderProps, LoginData } from "@/@types/auth.context";
import { externalCalls } from "@/services/externalCalls";
import axios from "axios";
import { createContext, useState } from "react";


export const AuthContext = createContext<AuthContextType | undefined>(undefined);


export function AuthProvider({children}: AuthProviderProps){

	const [user, setUser] = useState({});
	const [loggedInUser, setLoggedInUser] = useState(false);
	const [loadingPage, setLoadingPage] = useState(false);


	async function singIn(body: LoginData): Promise<string | void>{

		try{

			const response = await externalCalls.post("/user/authenticate", body);
			setUser(response.data);
			setLoggedInUser(true);
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


	return(
		<AuthContext.Provider value={{
			loggedInUser,
			loadingPage,
			user,
			singIn
		}}>
			{children}
		</AuthContext.Provider>
	);
}