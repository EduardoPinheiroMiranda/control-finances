import React from "react";
import { Container, TextInput, Text } from "./styles";
import { formatCurrency } from "@/services/formatCurrency";


interface PropsTypes{
	label: string;
	placeholder?: string;
	keyboardType: string;
	value: string;
	coin?: boolean;
	int?: boolean;
	callback:  React.Dispatch<React.SetStateAction<string>>;
	style?: object;
	multiline?: boolean;
}


export function Input(props: PropsTypes){

	function handlerValue(value: string){

		if(props.keyboardType === "numeric"){
			const onlyNumbers = value.replace(/\D/g, "");
			const number = !props.int? (parseFloat(onlyNumbers) / 100) : Number(onlyNumbers);
			

			if(!value){
				props.callback(props.coin ? formatCurrency(0) : "0");
				return;
			}


			if(props.coin){
				props.callback(formatCurrency(number));
				return;
			}


			props.callback(String(number));
			return;
		}

		props.callback(value);
		return;
	}
	
	return(
		<Container style={props.style}>
			<Text>{props.label}</Text>
			<TextInput
				placeholder={props.placeholder ?? ""}
				keyboardType={props.keyboardType}
				value={props.value}
				onChangeText={(value: string) => handlerValue(value)}
				multiline={props.multiline}
				numberOfLines={props.multiline? 10 : 1}
			/>
		</Container>
	);
}