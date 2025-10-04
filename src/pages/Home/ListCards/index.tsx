import { DisplayMoreDetails } from "@/components/DisplayMoreDatails";
import { Container, Title } from "./styles";
import { Card } from "@/components/Card";
import { FlatList } from "react-native-gesture-handler";
import { NotFound } from "@/components/NotFound";
import { View } from "react-native";


const cards = [
	{
		id: "1",
		name: "Mercado Pago",
		dueDay: 5,
		spent: 1000,
		colorFont: "#fafafa",
		colorCard: "#539EE1"
	},
	{
		id: "2",
		name: "Mercado Pago",
		dueDay: 5,
		spent: 1000,
		colorFont: "#fafafa",
		colorCard: "#539EE1"
	},
	{
		id: "3",
		name: "Mercado Pago",
		dueDay: 5,
		spent: 1000,
		colorFont: "#fafafa",
		colorCard: "#539EE1"
	}
];

export function ListCards(){

	return(
		<Container>
			<Title>Meus cartões</Title>

			{cards.length === 0 ?
				<NotFound/>
				:
				<FlatList
					style={{flex: 1, paddingVertical: 20}}
					data={cards}
					renderItem={({item}) => <Card card={{
						name: item.name,
						dueDay: item.dueDay,
						spent: item.spent,
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