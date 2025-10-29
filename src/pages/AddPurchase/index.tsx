import { Input } from "@/components/Input";
import { ButtonSection, Container, Form, PaymentSection, Placeholder, PriceSection, SelectDate, Text, TextInput} from "./styles";
import { useContext, useEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { UserContext } from "@/contexts/user.context";
import axios from "axios";
import { externalCalls } from "@/services/externalCalls";
import { format } from "date-fns";
import { AuthContext } from "@/contexts/Auth.context";

// components
import { OptionSelector } from "@/components/OptionSelector";
import { CustumButton } from "@/components/CustomButton";
import { TouchableOpacity } from "react-native";
import { CalendarModule } from "@/components/Calendar";
import { AlertDefault, PopUp } from "@/components/PopUp";
import { Spinner } from "@/components/Spinner";


export function AddPurchase(){

	const userContext = useContext(UserContext);
	const authContext = useContext(AuthContext);
	if (!userContext?.cards || !userContext?.category) return;

	const [name, setName] = useState("");
	const [typeInvoice, setTypesInvoice] = useState("EXTRA_EXPENSE");
	const [paymentMethod, setPaymentMethod] = useState("CARD");
	const [value, setValue] = useState(0);
	const [totalInstallments, setTotalInstallments] = useState(1);
	const [description, setDescription] = useState("");
	const [dueDay, setDueDay] = useState(0);
	const [categoryId, setCategoryId] = useState("");
	const [cardId, setCardId] = useState("");
	const [purchaseDate, setPurchaseDate] = useState("");

	const [openCalendar, setOpenCalendar] = useState(false);
	const [openPopUp, setOpenPopUp] = useState(false);
	const [popUp, setPopUp] = useState(AlertDefault);
	const [loading, setLoading] = useState(false);


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


	function resetForm(){
		setName("");
		setTypesInvoice("EXTRA_EXPENSE");
		setPaymentMethod("CARD");
		setValue(0);
		setTotalInstallments(1);
		setDescription("");
		setDueDay(0);
		setCategoryId(optionsCategories[0].value);
		setCardId(optionsCard[0].value);
		setPurchaseDate("");
		return;
	}


	function constructionPopUp(params: {alert?: boolean, title?: string, msg: string}){
		setPopUp({
			alert: params.alert ?? true,
			title: params.title ?? "Atenção",
			message: params.msg,
			buttons: [{ title: "Fechar", action: () => setOpenPopUp(false) }]
		});
		setOpenPopUp(true);
	}
	

	async function handlerForm(){

		Keyboard.dismiss();

		if(!name) return constructionPopUp({msg: "Você deve colocar um nome para esta compra."});
		if(!value) return constructionPopUp({msg: "O valor da compra não pode ser zero."});
		if(totalInstallments === 0) return constructionPopUp({msg: "Não é possível zerar a quantidade de parcelas, o mínimo sempre será 1."});
		if(paymentMethod !== "CARD" && dueDay < 1 || dueDay > 31) return constructionPopUp({msg: "Verifique o valor da data de pagamento e coloque um dia válido."});
			

		const constructionBody = {
			name,
			typeInvoice,
			paymentMethod,
			value: value,
			totalInstallments: totalInstallments,
			description: !description ? null : description,
			dueDay: !dueDay ? null : dueDay,
			categoryId: categoryId,
			cardId: paymentMethod !== "CARD" ? null : cardId,
			purchaseDate: !purchaseDate ? null : purchaseDate
		};

		
		try{

			setLoading(true);
			const request = await externalCalls.post("/shopping/registerShopping", constructionBody);
			const response = request.data;
			await userContext?.getInitialData();
			setLoading(false);

			resetForm();
			constructionPopUp({alert: false, title: "Sucesso", msg: response.msg});
			
			
			return;

		}catch(err){

			setLoading(false);

			if(axios.isAxiosError(err)){
				if(err.status === 401) return authContext?.singOut();
				if(err.status === 500) return constructionPopUp({msg: "Houve um pequeno problema, por favor tente novamente."});;
				constructionPopUp({msg: err.response?.data.msg});
				return;
			}
		}
	}


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
									value={value}
									callback={setValue}
									coin={true}
								/>

								{typeInvoice === "EXTRA_EXPENSE" && (
									<Input
										style={{flex: 1}}
										label="Quantidade de parcelas"
										keyboardType="numeric"
										value={totalInstallments}
										callback={setTotalInstallments}
										int={true}
									/>
								)}
								
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
									placeholder="Ex.: 10"
									callback={setDueDay}
									value={dueDay === 0 ? "" : dueDay}
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

						<SelectDate>
							<Text>Informe quando a compra foi feita - (opcional)</Text>
							<TouchableOpacity activeOpacity={1} onPress={() => setOpenCalendar(true)}>
								<TextInput>
									<Placeholder date={purchaseDate}>
										{!purchaseDate ? "01/01/2025" : format(purchaseDate, "dd/MM/yyyy")}
									</Placeholder>
								</TextInput>
							</TouchableOpacity>
						</SelectDate>

						<Input
							label="Adicione uma descrição - (opcional)"
							keyboardType="text"
							callback={setDescription}
							value={description}
							multiline={true}
						/>

						<ButtonSection>
							<CustumButton title="Salvar compra" action={() => handlerForm()}/>
						</ButtonSection>
					</Form>
				</ScrollView>
				<CalendarModule
					visible={openCalendar}
					callback={setPurchaseDate}
					closeCalendar={setOpenCalendar}
				/>
				<PopUp visible={openPopUp} data={popUp}/>
				<Spinner visible={loading}/>
			</KeyboardAvoidingView>
		</Container>
	);
}