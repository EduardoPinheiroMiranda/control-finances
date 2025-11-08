import { FlatList, TouchableOpacity } from "react-native";
import { Container, Header, PlusIcon, Title } from "./styles";
import { useContext } from "react";
import { UserContext } from "@/contexts/user.context";
import { Card as CardType } from "@/@types/user.context";
// components
import { Card } from "@/components/Card";


interface PropsTypes {
	card: CardType
}


function ButtonCard(props: PropsTypes){
	return(
		<TouchableOpacity activeOpacity={0.95}>
			<Card card={{
				name: props.card.name,
				dueDay: props.card.dueDay,
				spent: 0,
				colorFont: props.card.colorFont,
				colorBackground: props.card.colorCard
			}}/>
		</TouchableOpacity>
	);
}


export function CardManagement(){

	const userContext = useContext(UserContext);


	return(
		<Container>
			<Header>
				<Title>Meus cartões</Title>
				<TouchableOpacity activeOpacity={0.7}>
					<PlusIcon/>
				</TouchableOpacity>
			</Header>
			
			<FlatList
				data={userContext?.cards}
				numColumns={2}
				columnWrapperStyle={{ justifyContent: "space-evenly", marginBottom: 20 }}
				horizontal={false}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item.id}
				renderItem={({item}) => <ButtonCard card={item}/>}
			/>
		</Container>
	);
}