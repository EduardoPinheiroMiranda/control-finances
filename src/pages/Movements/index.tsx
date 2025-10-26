import { Container } from "./styles";
import { useContext, useEffect } from "react";
import { UserContext } from "@/contexts/user.context";

// components
import { Movement } from "@/components/Movement";
import { FlatList } from "react-native";


export function Movements(){

	const userContext = useContext(UserContext);


	useEffect(() => {
		async function startData(){
			if(!userContext?.movements){
				await userContext?.getInitialData();
			}
		}
		startData();
	}, []);


	if (!userContext?.movements) return;


	return(
		<Container>
			<FlatList
				style={{flex: 1}}
				data={userContext.movements}
				renderItem={({item}) => <Movement movement={item}/>}
				keyExtractor={(item) => item.id}
				horizontal={false}
				showsVerticalScrollIndicator={false}
			/>
		</Container>
	);
}