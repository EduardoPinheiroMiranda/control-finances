import { useNavigation } from "@react-navigation/native";
import { Button, Container, IconBag, IconDollar, IconInvoice, SectionIcon, TextButton } from "./styles";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "@/@types/drawer.routes";


type NavigationProps = DrawerNavigationProp<DrawerParamList>;


export function Shortcuts(){

	const navigation = useNavigation<NavigationProps>();


	function handlerNavigation(page: keyof DrawerParamList){
		navigation.navigate(page);
		return;
	}

	return(
		<Container>
			<Button onPress={() => handlerNavigation("AddPurchase")}>
				<SectionIcon>
					<IconBag/>
				</SectionIcon>
				
				<TextButton>Adicionar Compra</TextButton>
			</Button>

			<Button onPress={() => handlerNavigation("CreateApplication")}>
				<SectionIcon>
					<IconDollar/>
				</SectionIcon>
				
				<TextButton>Cria Aplicação</TextButton>
			</Button>

			<Button onPress={() => handlerNavigation("Extract")}>
				<SectionIcon>
					<IconInvoice/>
				</SectionIcon>
				
				<TextButton>Extrato</TextButton>
			</Button>
		</Container>
	);
}