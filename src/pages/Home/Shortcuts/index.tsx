import { useNavigation } from "@react-navigation/native";
import { Button, Container, IconBag, IconDollar, IconInvoice, SectionIcon, TextButton } from "./styles";


export function Shortcuts(){

	const navigation = useNavigation();


	function handlerNavigation(page: string){
		alert("preciso fazer a página ir até: " + page);
		return;
	}

	return(
		<Container>
			<Button onPress={() => handlerNavigation("AddNewPurchase")}>
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