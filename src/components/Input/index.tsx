import React, { useEffect, useState } from "react";
import { Container, TextInput, Text } from "./styles";
import { formatCurrency } from "@/services/formatCurrency";


interface PropsTypes{
	label: string;
	placeholder?: string;
	keyboardType: string;
	value: string | number;
	coin?: boolean;
	int?: boolean;
	callback: (value: any) => void;
	style?: object;
	multiline?: boolean;
}


export function Input(props: PropsTypes){

	const [MaskedValue, setMaskedValue] = useState("");


	useEffect(() => {

		if(props.coin && typeof props.value === "number"){
			setMaskedValue(formatCurrency(props.value));
			return;
		}

		setMaskedValue(String(props.value));
		
	}, [props.value]);


	function handlerValue(value: string){

		if(props.keyboardType === "numeric"){

			const onlyNumbers = value.replace(/\D/g, "");
			const number = !props.int? (parseFloat(onlyNumbers) / 100) : Number(onlyNumbers);
			
			setMaskedValue(props.coin ? formatCurrency(number) : String(number));
			props.callback(number);

			return;
		}

		props.callback(value);
		setMaskedValue(value);
		return;
	}
	
	return(
		<Container style={props.style}>
			<Text>{props.label}</Text>
			<TextInput
				placeholder={props.placeholder ?? ""}
				keyboardType={props.keyboardType}
				value={MaskedValue}
				onChangeText={(value: string) => handlerValue(value)}
				multiline={props.multiline}
				numberOfLines={props.multiline? 10 : 1}
			/>
		</Container>
	);
}