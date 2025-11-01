import { Container, Spinner } from "./styles";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/user.context";

// components
import { Movement } from "@/components/Movement";
import { FlatList } from "react-native";
import { ExternalCalls } from "@/services/externalCalls";


export function Movements(){

	const userContext = useContext(UserContext);
	const [movements, setMovements] = useState(userContext?.movements);
	const [loading, setLoading] = useState(false);
	
	if (!userContext?.movements) return;


	useEffect(() => {
		async function startData(){
			if(!userContext?.movements){
				await userContext?.getInitialData();
			}
		}
		startData();
	}, []);


	async function refresheData(){

		const externalCalls = new ExternalCalls();

		setLoading(true);
		const cursor = movements?.length ?? 0;
		const response = await externalCalls.GET(`/movement/getAllMovements?cursor=${cursor}`);
		setLoading(false);

		if(!response.success){
			return;
		}


		setMovements(!movements ? response.data : [...movements, ...response.data]);
		

		return;
	}


	return(
		<Container>
			<FlatList
				style={{flex: 1}}
				data={movements}
				renderItem={({item}) => <Movement movement={item}/>}
				keyExtractor={(item) => item.id}
				horizontal={false}
				showsVerticalScrollIndicator={false}
				onEndReached={() => refresheData()}
				ListFooterComponent={() => loading && <Spinner/>}
			/>
		</Container>
	);
}