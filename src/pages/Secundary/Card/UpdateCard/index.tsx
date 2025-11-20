import { useContext, useState } from "react";
import { Container } from "./styles";
import { UserContext } from "@/contexts/user.context";
import { StackParamsList } from "@/@types/card.stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
// components
import { FormCard } from "@/components/FormCard";
import { AlertDefault, PopUp } from "@/components/PopUp";
import { ExternalCalls } from "@/services/externalCalls";
import { Spinner } from "@/components/Spinner";


interface PropsTypes {
  route: RouteProp<StackParamsList, "UpdateCard">;
};


type NavigationPropsStack = StackNavigationProp<StackParamsList>;


export function UpdateCard(props: PropsTypes){

	const cardInf = props.route.params;
	
	const [name, setName] = useState(cardInf.name);
	const [dueDay, setDueDay] = useState(cardInf.dueDay);
	const [closingDay, setClosingDay] = useState(cardInf.closingDay);
	const [colorFont, setColorFont] = useState(cardInf.colorFont);
	const [colorBackground, setColorBackground] = useState(cardInf.colorCard);
	const [openPopUp, setOpenPopUp] = useState(false);
	const [popUp, setPopUp] = useState(AlertDefault);
	const [loading, setLoading] = useState(false);

	const userContext = useContext(UserContext);
	const navigation = useNavigation<NavigationPropsStack>();

	function resetPage(){
		navigation.navigate("Index");
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
			id: cardInf.id,
			name,
			dueDay,
			closingDay,
			colorFont: !colorFont ? null : colorFont,
			colorCard: !colorBackground ? null : colorBackground
		};

		setLoading(true);
		const response = await externalCalls.PUT("/card/updateCard", body);
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