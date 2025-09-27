import { useContext } from "react";
import { View } from "react-native";
import { AuthRoutes } from "./auth.routes";
import { AuthContext } from "@/contexts/Auth.context";
import { Spinner } from "@/components/Spinner";


export function Routes(){

	const authContext = useContext(AuthContext);


	if(authContext?.loadingPage){
		return(
			<Spinner visible={authContext.loadingPage}/>
		);
	}


	return(
		!authContext?.loggedInUser ? <AuthRoutes/> : <View/>
	);
}