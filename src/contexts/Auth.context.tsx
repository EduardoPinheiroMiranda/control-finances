import { createContext, ReactNode } from "react";


const AuthContext = createContext({});


interface AuthProviderProps {
  children: ReactNode;
}


export function AuthProvider({children}: AuthProviderProps){


	return(
		<AuthContext.Provider value={{}}>
			{children}
		</AuthContext.Provider>
	);
}