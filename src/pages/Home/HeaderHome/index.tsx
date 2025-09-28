import { TouchableOpacity } from "react-native";
import { Container, MenuIcon, SectionLogo, TextNameUser } from "./styles";
import Logo from "@/../assets/svgs/logo.svg";


interface PropsTypes {
    name: string,
    navigation: () => void
}


export function HeaderHome(props: PropsTypes){


	return(
		<Container>
			<SectionLogo>
				<Logo/>
				<TextNameUser>{props.name}</TextNameUser>
			</SectionLogo>

			<TouchableOpacity onPress={() => props.navigation()} activeOpacity={0.7}>
				<MenuIcon/>
			</TouchableOpacity>
		</Container>
	);
}