import { Container, TextLabel } from "./styles";
import { useMemo } from "react";
import { Subtitles } from "..";
import { TouchableOpacity } from "react-native";
import { DefaultTheme } from "styled-components";
import { useTheme } from "styled-components";


interface PropsTypes {
    subtitles: Subtitles;
	centerInvoice: (index: number) => void;
	index: number;
}


export function Label(props: PropsTypes){

	const theme: DefaultTheme = useTheme();


	const colorIndication = useMemo(() => {

		if(props.subtitles.current) return theme.colors.CURRENT;
		if(props.subtitles.pay) return theme.colors.PAY;
		if(!props.subtitles.current) return theme.colors.SECONDARY;
		
	}, [props.subtitles]);
    

	return(
		<Container>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => props.centerInvoice(props.index)}
			>
				<TextLabel color={colorIndication}>{props.subtitles.label}</TextLabel>
			</TouchableOpacity>
		</Container>
	);
}