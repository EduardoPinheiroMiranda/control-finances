import { Container, Header, Form, ButtonSection, CreateAccount } from "./styles";
import { useContext, useState } from "react";
import { TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
// icons
import IconSignUp from "../../../assets/svgs/icon-signUp.svg";
// components
import { Input } from "@/components/Input";
import { PasswordInput } from "@/components/PasswordInput";
import { CustumButton } from "@/components/CustomButton";
import { AlertDefault, PopUp } from "@/components/PopUp";
import { Spinner } from "@/components/Spinner";
import { AuthContext } from "@/contexts/Auth.context";


export function SignUp(){

	const navigation = useNavigation();
	const authContext = useContext(AuthContext);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [alertData, setAlertData] = useState(AlertDefault);
	const [openPopUp, setOpenPopUp] = useState(false);
	const [loading, setLoading] = useState(false);


	function resetPage(){
		setOpenPopUp(false);
		setName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
		navigation.goBack();
	}

	async function handlerForms(){

		if(!name || !email || !password || !confirmPassword){
			setOpenPopUp(true);
			setAlertData({
				alert: true,
				title: "Atenção",
				message: "Preencha todos os campos.",
				buttons: [{
					title: "Fechar",
					action: () => setOpenPopUp(false)
				}]
			});
			return;
		}

		if(password !== confirmPassword){
			setOpenPopUp(true);
			setAlertData({
				alert: true,
				title: "Atenção",
				message: "As senhas devem ser iguais.",
				buttons: [{
					title: "Fechar",
					action: () => setOpenPopUp(false)
				}]
			});
			return;
		}


		setLoading(true);
		const response = await authContext?.singUp({name, email, password});
		setLoading(false);


		if(response){
			setOpenPopUp(true);
			setAlertData({
				alert: response.statusCode === 201 ? false : true,
				title: response.statusCode === 201 ? "Sucesso" : "Atenção",
				message: response.msg,
				buttons: [{
					title: "Fechar",
					action: () => resetPage()
				}]
			});
			return;
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
					<Header>
						<IconSignUp/>
					</Header>

					<Form>
						<Input
							label="Nome completo"
							placeholder="Ex.: João da Silva"
							keyboardType="text"
							value={name}
							callback={setName}
						/>

						<Input
							label="informe seu e-mail"
							placeholder="Ex.: joaodasilva@exemple.com"
							keyboardType="text"
							value={email}
							callback={setEmail}
						/>

						<PasswordInput
							label="Senha"
							placeholder="Digite sua senha aqui"
							value={password}
							callback={setPassword}
						/>

						<PasswordInput
							label="Confirmar senha"
							placeholder="Digite novamente a sua senha aqui"
							value={confirmPassword}
							callback={setConfirmPassword}
						/>

					
					</Form>

					<ButtonSection>
						<CustumButton title="Entrar" action={handlerForms}/>

						<TouchableOpacity
							activeOpacity={0.5}
							onPress={() => navigation.goBack()}
						>
							<CreateAccount>
								Já tenho uma conta
							</CreateAccount>
						</TouchableOpacity>
					</ButtonSection>
				</ScrollView>
			</KeyboardAvoidingView>
			<PopUp visible={openPopUp} data={alertData}/>
			<Spinner visible={loading}/>
		</Container>
	);
}