import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "@/@types/drawer.routes";
import { Button, Container, IconArrowRight, TextButton } from "./styles";


type NavigationProp = DrawerNavigationProp<DrawerParamList>;

interface PropsTypes {
  page: keyof DrawerParamList;
}


export function DisplayMoreDetails({ page }: PropsTypes) {

	const navigation = useNavigation<NavigationProp>();

	function handleNavigation() {
		navigation.navigate(page);
	}

	return (
		<Container>
			<Button activeOpacity={0.7} onPress={handleNavigation}>
				<TextButton>Ver mais detalhes</TextButton>
				<IconArrowRight />
			</Button>
		</Container>
	);
}
