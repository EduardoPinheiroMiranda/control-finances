import { formatCurrency } from "@/services/formatCurrency";
import { Container, Header, TextHeaderLabel, TextHeaderValue } from "./styles";


export function PayInvoice(){




	return(
		<Container>
			<Header>
				<TextHeaderLabel>Vencimento - 10/10</TextHeaderLabel>
				<TextHeaderValue>{formatCurrency(1110)}</TextHeaderValue>
			</Header>
		</Container>
	);
}