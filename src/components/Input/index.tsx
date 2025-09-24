import React from "react";
import { Container, TextInput, Text } from "./styles";


interface PropsTypes{
	label: string,
	placeholder: string,
	keyboardType: string
	value: string | number,
	callback:  React.Dispatch<React.SetStateAction<string>>
}


export function Input(props: PropsTypes){


	return(
		<Container>
			<Text>{props.label}</Text>
			<TextInput
				placeholder={props.placeholder}
				keyboardType={props.keyboardType}
				value={props.value}
				onChangeText={(value: string) => props.callback(value)}
			/>
		</Container>
	);
}