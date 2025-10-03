import { Button, Container, IconArrowRight, TextButton } from "./styles";


interface PropsTypes {
    page: string
}

export function DisplayMoreDetails(props: PropsTypes){

	function handlerNavigation(page: string){
		alert("Navegar até a página " + page);
		return;
	}

	return(
		<Container>
			<Button activeOpacity={0.7} onPress={() => handlerNavigation(props.page)}>
				<TextButton>Ver mais detalhes</TextButton>
				<IconArrowRight/>
			</Button>
		</Container>
	);
}