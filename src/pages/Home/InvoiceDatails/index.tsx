import { formatCurrency } from "@/services/formatCurrency";
import { Container, Header, LabelValues, TextExpired, TextSpent, TextTitle, TextValue, Descriptions, Informations, TextDescription } from "./styles";
import { Slider } from "./Slider/inde";
import { View } from "react-native";
import { DisplayMoreDetails } from "@/components/DisplayMoreDatails";


interface PropsTypes {
    showValue: boolean,
	spent: number
}

export function InvoiceDatails(props: PropsTypes){


	return(
		<Container>
			<Header>
				<TextTitle>Fatura atual</TextTitle>
				<TextExpired>Vencimento - 10/02</TextExpired>
			</Header>

			<View>
				<LabelValues>
					<TextValue>{props.showValue ? formatCurrency(3600) : "R$ ****"}</TextValue>
					<TextSpent>80%</TextSpent>
				</LabelValues>

				<Slider spent={props.spent}/>

				<Informations>
					<Descriptions>
						<TextDescription>Disponivel</TextDescription>
						<TextDescription>
							{props.showValue ? formatCurrency(3600) : "R$ ****"}
						</TextDescription>
					</Descriptions>

					<Descriptions>
						<TextDescription>Utilizado</TextDescription>
						<TextDescription>
							{props.showValue ? formatCurrency(3600) : "R$ ****"}
						</TextDescription>
					</Descriptions>

					<Descriptions>
						<TextDescription>Limite</TextDescription>
						<TextDescription>
							{props.showValue ? formatCurrency(3600) : "R$ ****"}
						</TextDescription>
					</Descriptions>
				</Informations>

				<DisplayMoreDetails page="InvoiceDetails"/>
			</View>
		</Container>
	);
}