import { Button, Text } from "./styles";


interface PropsType {
    title: string,
	action: () => void
}


export function CustumButton(props: PropsType){

    
	return(
		<Button activeOpacity={0.7} style={{elevation: 2}} onPress={() => props.action()} >
			<Text>{props.title}</Text>
		</Button>
	);
}