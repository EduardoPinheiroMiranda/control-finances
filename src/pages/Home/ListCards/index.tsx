import { DisplayMoreDetails } from "@/components/DisplayMoreDatails";
import { Container, Title } from "./styles";
import { Card } from "@/components/Card";
import { FlatList } from "react-native-gesture-handler";


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
			
			<DisplayMoreDetails page="ManageCards"/>
		</Container>
	);
}