import { Button, Text } from "./styles";


interface PropsType {
    title: string
}


export function CustumButton(props: PropsType){

    
	return(
		<Button activeOpacity={0.7} style={{elevation: 2}}>
			<Text>{props.title}</Text>
		</Button>
	);
}