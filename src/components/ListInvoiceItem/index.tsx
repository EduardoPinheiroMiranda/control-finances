import { Installment } from "@/@types/user.context";
import { Container, Header, Title } from "./styles";
import { formatCurrency } from "@/services/formatCurrency";
import { Movement } from "../Movement";
import { View } from "react-native";


interface PropsTypes {
    totalFixedExpense: number;
    totalExtraExpense: number;
    installments: {
        fixedExpense: Installment[];
        extraExpense: Installment[];
    }
}

interface RenderListTypes {
    name: string,
    value: number,
    installments: Installment[]
}


export function ListInvoiceItem(props: PropsTypes){


	function RenderList(elements: RenderListTypes){
		return(
			<View>
				<Header>
					<Title>{elements.name}</Title>
					<Title>{formatCurrency(elements.value)}</Title>
				</Header>
				{elements.installments.map((installment) => <Movement key={installment.installmentId} movement={{
					name: installment.name,
					type: installment.paymentMethod,
					value: installment.installmentValue,
					createdAt: installment.purchaseDate,
					installment: installment.installmentNumber,
					totalInstallment: installment.totalInstallments
				}}/>)}
			</View>
		);
	}


	return(
		<Container>
			<RenderList
				name="Gastos fixos" 
				value={props.totalFixedExpense}
				installments={props.installments.fixedExpense}
			/>
			<RenderList
				name="Gastos extras" 
				value={props.totalExtraExpense}
				installments={props.installments.extraExpense}
			/>
		</Container>
	);
}