import { TouchableOpacity } from "react-native";
import { Container, SectionValues, TextLabel, TextValue } from "./styles";
// icon
import EyeOpen from "@/../assets/svgs/eye-open.svg";
import EyeClose from "@/../assets/svgs/eye-close.svg";
import { useState } from "react";


export function Balance(){

	const [showValue, setShowValue] = useState(true);


	return(
		<Container>
			<TextLabel>Saldo total</TextLabel>
			<SectionValues>
				<TextValue>R$ {showValue ? "1000,00" : "****"}</TextValue>
				<TouchableOpacity activeOpacity={0.7} onPress={() => setShowValue(!showValue)}>
					{showValue ? <EyeOpen/> : <EyeClose/>}
				</TouchableOpacity>
			</SectionValues>
		</Container>
	);
}