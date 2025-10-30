import { ScrollView } from "react-native";
import { Container, DescriptionInvoice, Header, SectionValues, TextHeader, TextValueInvoice } from "./styles";
import { useContext } from "react";
import { UserContext } from "@/contexts/user.context";
import { formatCurrency } from "@/services/formatCurrency";

// components
import { Slider } from "@/components/Slider/inde";
import { Subtitle } from "./Subtitle";
import { formatDate } from "date-fns";



export function InvoiceDetails(){

	const userContext = useContext(UserContext);
	if(!userContext || !userContext.invoice) return;


	const expenseDetails = [
		[
			[{name: "Dinheiro", value: userContext.invoice.totalMoney}],
			[{name: "Cartão", value: userContext.invoice.totalCard}],
			[{name: "Boleto", value: userContext.invoice.totalInvoice}],
		],

		[
			[{name: "Disponível", value: userContext.invoice.available}],
			[{name: "Utilizado", value: userContext.invoice.amount}],
			[{name: "Limite", value: userContext.invoice.limit}],
		]
	];


	return(
		<Container>
			<ScrollView
				horizontal={false}
				showsVerticalScrollIndicator={false}
				style={{flex: 1}}
			>
				<DescriptionInvoice>
					<Header>
						<TextHeader>Fatura atual</TextHeader>
						<TextHeader>Vencimento - {formatDate(userContext.invoice.dueDate, "dd/MM")}</TextHeader>
					</Header>

					<SectionValues>
						<TextValueInvoice>{formatCurrency(userContext.invoice.amount)}</TextValueInvoice>
						<Slider spent={userContext.invoice.percentageSpent}/>
					</SectionValues>

					<Subtitle data={expenseDetails}/>
				</DescriptionInvoice>

			</ScrollView>
		</Container>
	);
}