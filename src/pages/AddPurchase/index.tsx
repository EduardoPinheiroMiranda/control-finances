import { Input } from "@/components/Input";
import { ButtonSection, Container, Form, PaymentSection, PriceSection} from "./styles";
import { useContext, useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { UserContext } from "@/contexts/user.context";

// components
import { OptionSelector } from "@/components/OptionSelector";
import { CustumButton } from "@/components/CustomButton";


export function AddPurchase(){

	const userContext = useContext(UserContext);
	if (!userContext?.cards || !userContext?.category) return;

	const [name, setName] = useState("");
	const [typeInvoice, setTypesInvoice] = useState("FIXED_EXPENSE");
	const [paymentMethod, setPaymentMethod] = useState("CARD");
	const [value, setValue] = useState("");
	const [totalInstallments, setTotalInstallments] = useState("1");
	const [description, setDescription] = useState("");
	const [dueDay, setDueDay] = useState("");
	const [categoryId, setCategoryId] = useState("");
	const [cardId, setCardId] = useState("");
	const [purchaseDate, setPurchaseDate] = useState();


	const optionsInvoices = [
		{label: "Definir conta como gasto extra", value: "EXTRA_EXPENSE"},
		{label: "Definir conta como gasto fixo", value: "FIXED_EXPENSE"},
	];

	const optionsPayment = [
		{label: "Cartão", value: "CARD"},
		{label: "Dinheiro", value: "MONEY"},
		{label: "Boleto", value: "INVOICE"},
	];

	const optionsCard = userContext.cards.map((card) => {
		return {label: card.name, value: card.id};
	});

	const optionsCategories = userContext.category.map((category) => {
		return {label: category.name, value: category.id};
	});

	useEffect(() => {
		setCardId(optionsCard[0].value);
		setCategoryId(optionsCategories[0].value);
	}, []);
	

	return(
		<Container>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ?  "padding" : "height"}
				enabled={true}
				style={{flex: 1}}
			>
				<ScrollView
					style={{flex: 1}}
					horizontal={false}
					keyboardShouldPersistTaps="handled"
					showsVerticalScrollIndicator={false}
				>
					<Form>
						<Input
							label="Titulo para a compra"
							keyboardType="text"
							placeholder="Ex.: compra no mercado"
							callback={setName}
							value={name}
						/>

						<OptionSelector 
							label="Selecione o tipo da compra"
							value={typeInvoice}
							callback={setTypesInvoice}
							options={optionsInvoices}
						/>

						<PaymentSection>
							<OptionSelector 
								label="Selecione a forma de pagamento"
								value={paymentMethod}
								callback={setPaymentMethod}
								options={optionsPayment}
							/>

							<PriceSection>
								<Input
									style={{flex: 1}}
									label="Valor total da compra"
									keyboardType="numeric"
									placeholder="R$ 0,00"
									value={value}
									callback={setValue}
									coin={true}
								/>

								<Input
									style={{flex: 1}}
									label="Quantidade de parcelas"
									keyboardType="numeric"
									value={totalInstallments}
									callback={setTotalInstallments}
									int={true}
								/>
							</PriceSection>

							{paymentMethod === "CARD" ?
								<OptionSelector 
									label="Selecione um cartão"
									value={cardId}
									callback={setCardId}
									options={optionsCard}
								/>
								:
								<Input
									label="Informe o dia em que deve pagar esta conta"
									keyboardType="numeric"
									callback={setDueDay}
									value={dueDay}
									int={true}
								/>
							}

					
						</PaymentSection>

						<OptionSelector 
							label="Selecione a categoria desta compra"
							value={categoryId}
							callback={setCategoryId}
							options={optionsCategories}
						/>

						<Input
							label="Adicione uma descrição - (opcional)"
							keyboardType="text"
							callback={setDescription}
							value={description}
							multiline={true}
						/>

						<ButtonSection>
							<CustumButton title="Salvar compra" action={() => {}}/>
						</ButtonSection>
					</Form>
				</ScrollView>
			</KeyboardAvoidingView>
		</Container>
	);
}