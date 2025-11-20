import { FlatList, TouchableOpacity } from "react-native";
import { Container, Header, PlusIcon, Title } from "./styles";
import { useContext } from "react";
import { UserContext } from "@/contexts/user.context";
import { Card as CardType } from "@/@types/user.context";
// components
import { Card } from "@/components/Card";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamsList } from "@/@types/card.stack";
import { HeaderDrawer } from "@/components/HeaderDrawer";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "@/@types/drawer.routes";


interface PropsTypes {
	card: CardType
}


type NavigationPropsStack = StackNavigationProp<StackParamsList>;
type NavigationPropsDrawer = DrawerNavigationProp<DrawerParamList>;



function ButtonCard(props: PropsTypes){

	return(
		<TouchableOpacity activeOpacity={0.95}>
			<Card card={{
				name: props.card.name,
				dueDay: props.card.dueDay,
				spent: 0,
				colorFont: props.card.colorFont,
				colorBackground: props.card.colorCard,
				showValue: true
			}}/>
		</TouchableOpacity>
	);
}


export function CardManagement(){

	const userContext = useContext(UserContext);
	const navigation = useNavigation<NavigationPropsStack>();
	const drawerNavigation = navigation.getParent<NavigationPropsDrawer>();

	
	return(
		<Container>
			<HeaderDrawer title="Gerenciar cartões" navigation={drawerNavigation.openDrawer}/>
			<Header>
				<Title>Meus cartões</Title>
				<TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("AddCard")}>
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