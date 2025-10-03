import { Container, Marked, Progress } from "./styles";


interface PropsTypes {
    spent: number
}


export function Slider(props: PropsTypes){

    
	return(
		<Container>
			<Progress width={props.spent}>
				<Marked/>
			</Progress>
		</Container>
	);
}