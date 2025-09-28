import { TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Container, Text,  MenuIcon, SectionTitle } from "./styles";

interface PropsTypes{
	title: string,
	navigation: () => void
}


const statusBarHeight = Constants.statusBarHeight;


export function Header(props: PropsTypes){
	return(
		<Container style={{marginTop: statusBarHeight}}>
			<SectionTitle>
				<Text>{props.title}</Text>

				<TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation()}>
					<MenuIcon/>
				</TouchableOpacity>
			</SectionTitle>			
		</Container>
	);
}