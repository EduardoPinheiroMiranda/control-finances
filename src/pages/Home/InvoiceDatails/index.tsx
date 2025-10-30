import { formatCurrency } from "@/services/formatCurrency";
import { Container, Header, Section, TextExpired, TextTitle, TextValue } from "./styles";
import { Slider } from "../../../components/Slider/inde";
import { DisplayMoreDetails } from "@/components/DisplayMoreDatails";
import { Invoice } from "@/@types/user.context";
import { formatDate } from "date-fns";
import { View } from "react-native";


interface PropsTypes {
    showValue: boolean,
	invoice: Invoice
}

export function InvoiceDatails(props: PropsTypes){

	const percentageSpent = props.invoice.percentageSpent;
	const amount = props.invoice.amount;


	return(
		<Container>
			<Header>
				<TextTitle>Fatura atual</TextTitle>
				<TextExpired>Vencimento - {formatDate(new Date(props.invoice.dueDate), "dd/MM")}</TextExpired>
			</Header>

			<Section>
				<Slider spent={percentageSpent}/>
				<View style={{gap: 20}}>
					<TextValue>{props.showValue ? formatCurrency(amount) : "R$ ****"}</TextValue>
					<DisplayMoreDetails page="InvoiceDetails"/>
				</View>
			</Section>
		</Container>
	);
}