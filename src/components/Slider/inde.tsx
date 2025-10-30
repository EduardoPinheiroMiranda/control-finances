import { Background, Container, Marked, Progress, Text } from "./styles";


interface PropsTypes {
    spent: number
}


export function Slider(props: PropsTypes){

	const progress = props.spent > 100 ? 100 : props.spent;

    
	return(
		<Container>
			<Background>
				<Progress width={progress}>
					<Marked/>
				</Progress>
			</Background>
			<Text>{props.spent}%</Text>
		</Container>
	);
}