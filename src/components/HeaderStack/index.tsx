import { TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Container, Text,  MenuIcon, SectionTitle } from "./styles";

interface PropsTypes{
	title: string,
	navigation: () => void
}


const statusBarHeight = Constants.statusBarHeight;


export function HeaderStack(props: PropsTypes){
	return(
		<Container style={{marginTop: statusBarHeight}}>
			<SectionTitle>
				<TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation()}>
					<MenuIcon/>
				</TouchableOpacity>
				
				<Text>{props.title}</Text>
			</SectionTitle>			
		</Container>
	);
}