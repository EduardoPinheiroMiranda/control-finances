import { Container, Section, TextTitle } from "./styles";
import { View } from "react-native";
import { Movement as TypeMovement } from "@/@types/user.context";
// compoenets
import { Movement } from "@/components/Movement";
import { DisplayMoreDetails } from "@/components/DisplayMoreDatails";
import { NotFound } from "@/components/NotFound";


interface PropsTypes {
	movements: TypeMovement[]
}


export function ListMovements(props: PropsTypes){

	const RenderMovements = props.movements.map(
		(movement) => <Movement key={movement.id} movement={movement}/>
	);
    

	return(
		<Container>
			<TextTitle>Atividades recentes</TextTitle>

			<Section>
				{props.movements.length === 0 ? <NotFound/> : RenderMovements}
			</Section>

			<View style={{marginRight: 20, marginTop: 30}}>
				<DisplayMoreDetails page="Movements"/>
			</View>
		</Container>
	);
}