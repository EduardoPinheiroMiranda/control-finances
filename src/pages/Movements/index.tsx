import { Container, Spiner } from "./styles";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/user.context";

// components
import { Movement } from "@/components/Movement";
import { FlatList } from "react-native";
import { externalCalls } from "@/services/externalCalls";
import axios from "axios";
import { AuthContext } from "@/contexts/Auth.context";


export function Movements(){

	const userContext = useContext(UserContext);
	const authContext = useContext(AuthContext);

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

		try{
			
			setLoading(true);
			const cursor = movements?.length ?? 0;
			const request = await externalCalls.get(`/movement/getAllMovements?cursor=${cursor}`);
			const response = request.data;
			setMovements(!movements ? response : [...movements, ...response]);
			setLoading(false);

		}catch(err){
			setLoading(false);
			if(axios.isAxiosError(err)){
				if(err.status === 401){
					return authContext?.singOut();
				}
			}
		}
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
				ListFooterComponent={() => loading && <Spiner/>}
			/>
		</Container>
	);
}