import React from "react";
import { Container, Label, Text } from "./styles";
import ArrowRight from "../../../../../../assets/svgs/arrow-right.svg";
import { TouchableOpacity } from "react-native";


interface PropsTypes {
    option: {
        icon: React.JSX.Element;
        text: string;
		nextPage: () => void;
    };
}


export function Option(props: PropsTypes){
	return(
		<TouchableOpacity activeOpacity={0.7} onPress={() => props.option.nextPage()}>
			<Container>
				<Label>
					{props.option.icon}
					<Text>{props.option.text}</Text>
				</Label>
				<ArrowRight/>
			</Container>	
		</TouchableOpacity>
	);
}