import { FlatList } from "react-native";
import { Container } from "./styles";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackParamsList } from "@/@types/card.stack";
import { StackNavigationProp } from "@react-navigation/stack";
// icons
import CardEdit from "../../../../../assets/svgs/card-edit.svg";
import Invoice from "../../../../../assets/svgs/invoice-mixed.svg";
import Chart from "../../../../../assets/svgs/chart-mixed.svg";
import CardRemoved from "../../../../../assets/svgs/card-remove.svg";
// components
import { Option } from "./Option";


type NavigationPropsStack = StackNavigationProp<StackParamsList>;


interface PropsTypes {
  route: RouteProp<StackParamsList, "CardMenu">;
};


export function CardMenu(prosp: PropsTypes){

	const cardInfo = prosp.route.params;
	const navigation = useNavigation<NavigationPropsStack>();

	const listOptions = [
		{ icon: <CardEdit/>, text: "Atualizar Cartão", nextPage: () => navigation.navigate("UpdateCard", cardInfo)},
		{ icon: <Chart/>, text: "Antecipar faturas", nextPage: () => navigation.navigate("UpdateCard", cardInfo)},
		{ icon: <Invoice/>, text: "Resumo de faturas", nextPage: () => navigation.navigate("UpdateCard", cardInfo)},
		{ icon: <CardRemoved/>, text: "Excluir cartão", nextPage: () => navigation.navigate("UpdateCard", cardInfo)},
	];


	return(
		<Container>
			<FlatList
				data={listOptions}
				renderItem={({item}) => <Option option={item}/>}
				keyExtractor={(_, index) => String(index)}
				horizontal={false}
				showsVerticalScrollIndicator={false}
			/>
		</Container>
	);
}