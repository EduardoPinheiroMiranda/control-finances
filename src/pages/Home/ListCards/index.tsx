import { DisplayMoreDetails } from "@/components/DisplayMoreDatails";
import { Container, Title } from "./styles";
import { Card } from "@/components/Card";
import { FlatList } from "react-native-gesture-handler";
import { NotFound } from "@/components/NotFound";
import { View } from "react-native";
import { Card as TypeCard} from "@/@types/user.context";


interface PropsTypes{
	cards: TypeCard[]
}


export function ListCards(props: PropsTypes){

	return(
		<Container>
			<Title>Meus cartões</Title>

			{props.cards.length === 0 ?
				<NotFound/>
				:
				<FlatList
					style={{flex: 1, paddingVertical: 20}}
					data={props.cards}
					renderItem={({item}) => <Card card={{
						name: item.name,
						dueDay: item.dueDay,
						spent: 0,
						colorFont: item.colorFont,
						colorBackground: item.colorCard
					}}/>}
					keyExtractor={(item) => item.id}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				/>
			}
			<View style={{marginRight: 20}}>
				<DisplayMoreDetails page="ManageCards"/>
			</View>
		</Container>
	);
}