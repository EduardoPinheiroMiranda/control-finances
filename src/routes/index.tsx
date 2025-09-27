import { useContext } from "react";
import { View } from "react-native";
import { AuthRoutes } from "./auth.routes";
import { AuthContext } from "@/contexts/Auth.context";
import { Spinner } from "@/components/Spinner";
import { DrawerNavigation } from "./drawer.routes";


export function Routes(){

	const authContext = useContext(AuthContext);


	if(authContext?.loadingPage){
		return(
			<View>
				<Spinner visible={true}/>
			</View>
		);
	}
	

	return(
		authContext?.loggedInUser ? <DrawerNavigation/> : <AuthRoutes/>
	);
}