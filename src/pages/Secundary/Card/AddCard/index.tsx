import { useContext, useState } from "react";
import { Container } from "./styles";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
// components
import { FormCard } from "@/components/FormCard";
import { AlertDefault, PopUp } from "@/components/PopUp";
import { ExternalCalls } from "@/services/externalCalls";
import { Spinner } from "@/components/Spinner";
import { UserContext } from "@/contexts/user.context";


export function AddCard(){

	const [name, setName] = useState("");
	const [dueDay, setDueDay] = useState(0);
	const [closingDay, setClosingDay] = useState(0);
	const [colorFont, setColorFont] = useState("");
	const [colorBackground, setColorBackground] = useState("");
	const [openPopUp, setOpenPopUp] = useState(false);
	const [popUp, setPopUp] = useState(AlertDefault);
	const [loading, setLoading] = useState(false);

	const userContext = useContext(UserContext);


	function resetPage(){
		setName("");
		setDueDay(0);
		setClosingDay(0);
		setColorFont("");
		setColorBackground("");
		userContext?.getInitialData();
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


	async function HandlerForm(){

		if(!name || !dueDay || !closingDay) return constructionPopUp({msg: "Nome, fechamento do cartão e vencimento são campos obrigatorios."});


		const externalCalls = new ExternalCalls();
		const body = {
			name,
			dueDay,
			closingDay,
			colorFont: !colorFont ? null : colorFont,
			colorCard: !colorBackground ? null : colorBackground
		};

		setLoading(true);
		const response = await externalCalls.POST("/card/registerCard", body);
		setLoading(false);

		if(!response.success) return constructionPopUp({msg: response.msg});

		return resetPage();
	}
	

	return(
		<Container>
			<TouchableOpacity 
				onPress={() => Keyboard.dismiss()}
				activeOpacity={1}
				style={{flex: 1}}
			>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					enabled
					style={{flex: 1}}
				>
					<FormCard
						name={name}
						setName={setName}
						dueDay={dueDay}
						setDueDay={setDueDay}
						closingDay={closingDay}
						setClosingDay={setClosingDay}
						colorFont={colorFont}
						setColorFont={setColorFont}
						colorBackground={colorBackground}
						setColorBackground={setColorBackground}
						submitForm={HandlerForm}
					/>
				</KeyboardAvoidingView>
			</TouchableOpacity>
			<PopUp visible={openPopUp} data={popUp}/>
			<Spinner visible={loading}/>
		</Container>
	);
}