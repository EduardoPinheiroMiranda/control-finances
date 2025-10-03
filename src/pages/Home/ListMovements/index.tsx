import { DisplayMoreDetails } from "@/components/DisplayMoreDatails";
import { Container, Section, TextTitle } from "./styles";
import { Movement } from "@/components/Movement";

const movements = [
	{
		id: "1",
		name: "Deposito",
		type: "DEPOSIT",
		value: 200,
		dueDate: "2025-10-10",
		installment: 0
	},
	{
		id: "2",
		name: "Roupas",
		type: "CARD",
		value: 300,
		dueDate: "2025-09-10",
		installment: 2
	},
	{
		id: "3",
		name: "Saque",
		type: "WITHDRAW",
		value: 100,
		dueDate: "2025-10-10",
		installment: 0
	},
	{
		id: "4",
		name: "Farmacia",
		type: "MONEY",
		value: 300,
		dueDate: "2025-09-10",
		installment: 2
	},
	{
		id: "5",
		name: "Conat de luz",
		type: "INVOICE",
		value: 100,
		dueDate: "2025-10-10",
		installment: 0
	},
];


export function ListMovements(){

	const RenderMovements = movements.map((movement) => <Movement key={movement.id} movement={movement}/>);
    

	return(
		<Container>
			<TextTitle>Atividades recentes</TextTitle>
			<Section>
				{RenderMovements}
			</Section>
			<DisplayMoreDetails page="Movements"/>
		</Container>
	);
}