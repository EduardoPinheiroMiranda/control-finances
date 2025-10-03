import { formatCurrency } from "@/services/formatCurrency";
import { Container, Description, Section, TextBottom, TextTop } from "./styles";
// icon
import Card from "@/../assets/svgs/card.svg";
import Invoice from "@/../assets/svgs/invoice.svg";
import Deposito from "@/../assets/svgs/deposito.svg";
import Saque from "@/../assets/svgs/saque.svg";
import Money from "@/../assets/svgs/money.svg";
import { format, parseISO } from "date-fns";


interface PropsTypes {
    movement: {
        name: string,
        type: string,
        value: number,
        dueDate: string,
        installment: number
    }
}


export function Movement(props: PropsTypes){

	const value = formatCurrency(props.movement.value);
	const purchased = format(parseISO(props.movement.dueDate), "dd/MM/yyyy");
    

	function RenderIcon(typeMovement: string){
		if(typeMovement === "CARD") return <Card/>;
		if(typeMovement === "MONEY") return <Money/>;
		if(typeMovement === "INVOICE") return <Invoice/>;
		if(typeMovement === "DEPOSIT") return <Deposito/>;
		if(typeMovement === "WITHDRAW") return <Saque/>;
		return;
	}


	return(
		<Container>
			{RenderIcon(props.movement.type)}
			<Description>
				<Section>
					<TextTop>{props.movement.name}</TextTop>
					<TextTop>{value}</TextTop>
				</Section>
				<Section>
					<TextBottom>{purchased}</TextBottom>
					{props.movement.type !== "DEPOSIT" && props.movement.type !== "WITHDRAW" && (
						<TextBottom>{props.movement.installment}x</TextBottom>
					)}
				</Section>
			</Description>
		</Container>
	);
}