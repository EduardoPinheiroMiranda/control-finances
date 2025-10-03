import { TouchableOpacity } from "react-native";
import { Container, SectionValues, TextLabel, TextValue } from "./styles";
import { formatCurrency } from "@/services/formatCurrency";
// icon
import EyeOpen from "@/../assets/svgs/eye-open.svg";
import EyeClose from "@/../assets/svgs/eye-close.svg";


interface ProspTypes{
	showValue: boolean;
	hideValue: (showValue: boolean) => void
}

export function Balance(props: ProspTypes){


	return(
		<Container>
			<TextLabel>Saldo total</TextLabel>
			<SectionValues>
				<TextValue>{props.showValue ? formatCurrency(3600) : "R$ ****"}</TextValue>
				<TouchableOpacity activeOpacity={0.7} onPress={() => props.hideValue(!props.showValue)}>
					{props.showValue ? <EyeOpen/> : <EyeClose/>}
				</TouchableOpacity>
			</SectionValues>
		</Container>
	);
}