import React from "react";
import { Picker } from "@react-native-picker/picker";
import { Container, Label, PickerSelect, Section } from "./styles";


interface PropsTypes {
	label: string;
	value: string,
	callback: (value: string) => void;
	options: {label: string, value: string}[];
}


export function OptionSelector(props: PropsTypes){

	const PickerItems = props.options.map((option) => {
		return <Picker.Item label={option.label} value={option.value}/>;
	});


	return(
		<Container>
			<Label>{props.label}</Label>
			<Section>
				<PickerSelect
					selectedValue={props.value}
					onValueChange={(item: string) => props.callback(item)}
				>
					{PickerItems}
				</PickerSelect>
			</Section> 
		</Container>
       
	);
}