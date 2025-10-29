import { formatCurrency } from "@/services/formatCurrency";
import { Container, Header, LabelValues, TextExpired, TextSpent, TextTitle, TextValue, Descriptions, Informations, TextDescription } from "./styles";
import { Slider } from "../../../components/Slider/inde";
import { View } from "react-native";
import { DisplayMoreDetails } from "@/components/DisplayMoreDatails";
import { Invoice } from "@/@types/user.context";
import { formatDate } from "date-fns";


interface PropsTypes {
    showValue: boolean,
	invoice: Invoice
}

export function InvoiceDatails(props: PropsTypes){

	const percentageSpent = props.invoice.percentageSpent;
	const progress = percentageSpent > 100 ? 100 : percentageSpent;
	const amount = props.invoice.amount;
	const available = props.invoice.available;
	const limit = props.invoice.limit;


	return(
		<Container>
			<Header>
				<TextTitle>Fatura atual</TextTitle>
				<TextExpired>Vencimento - {formatDate(new Date(props.invoice.dueDate), "dd/MM")}</TextExpired>
			</Header>

			<View>
				<LabelValues>
					<TextValue>{props.showValue ? formatCurrency(amount) : "R$ ****"}</TextValue>
					<TextSpent>{percentageSpent}%</TextSpent>
				</LabelValues>

				<Slider spent={progress}/>

				<Informations>
					<Descriptions>
						<TextDescription>Disponivel</TextDescription>
						<TextDescription>
							{props.showValue ? formatCurrency(available) : "R$ ****"}
						</TextDescription>
					</Descriptions>

					<Descriptions>
						<TextDescription>Utilizado</TextDescription>
						<TextDescription>
							{props.showValue ? formatCurrency(amount) : "R$ ****"}
						</TextDescription>
					</Descriptions>

					<Descriptions>
						<TextDescription>Limite</TextDescription>
						<TextDescription>
							{props.showValue ? formatCurrency(limit) : "R$ ****"}
						</TextDescription>
					</Descriptions>
				</Informations>

				<DisplayMoreDetails page="InvoiceDetails"/>
			</View>
		</Container>
	);
}