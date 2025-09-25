import { useState } from "react";
import { View } from "react-native";
import { AuthRoutes } from "./auth.routes";


export function Routes(){

	const [loadedData, setLoadedData] = useState(false);
	const [loggedInUser, setLoggedInUser] = useState(false);


	return(!loggedInUser ? <AuthRoutes/> : <View/>);
}