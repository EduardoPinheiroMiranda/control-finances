import { Input } from "@/components/Input";
import { Container} from "./styles";
import { useState } from "react";

export function AddPurchase(){

	const [name, setName] = useState("");
	const [typeInvoice, setTypeInvoice] = useState();
	const [paymentMethod, setPaymentMethod] = useState();
	const [value, setValue] = useState();
	const [totalInstallments, setTotalInstallments] = useState();
	const [description, setDescription] = useState();
	const [dueDay, setDueDay] = useState();
	const [categoryId, setCategoryId] = useState();
	const [cardId, setCardId] = useState();
	const [purchaseDate] = useState();
	

	return(
		<Container>

			<Input
				label="Titulo para a compra"
				keyboardType="text"
				placeholder="Ex.: compra no mercado"
				callback={setName}
				value={name}
			/>

		</Container>
	);
}