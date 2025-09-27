import { TouchableOpacity } from "react-native";
import { Container, Text,  MenuIcon, SectionTitle } from "./styles";

interface PropsTypes{
	title: string,
	navigation: () => void
}


export function Header(props: PropsTypes){
	return(
		<Container>
			<SectionTitle>
				<Text>{props.title}</Text>

				<TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation()}>
					<MenuIcon/>
				</TouchableOpacity>
			</SectionTitle>			
		</Container>
	);
}