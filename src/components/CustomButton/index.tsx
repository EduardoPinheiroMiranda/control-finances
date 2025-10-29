import { Button, Text } from "./styles";


interface PropsType {
    title: string;
	action: () => void;
	alert?: boolean;
	width?: number
}


export function CustumButton(props: PropsType){

    
	return(
		<Button
			activeOpacity={0.7}
			onPress={() => props.action()}
			alert={props.alert}
			width={props.width}
			style={{elevation: 2}}
		>
			<Text>{props.title}</Text>
		</Button>
	);
}