import { Container, Header, Form, ButtonSection, CreateAccount } from "./styles";
import { useContext, useState } from "react";
import { TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
// icons
import IconSignIn from "../../../assets/svgs/icon-signIn.svg";
// components
import { Input } from "@/components/Input";
import { PasswordInput } from "@/components/PasswordInput";
import { CustumButton } from "@/components/CustomButton";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "@/@types/auth.routes";
import { AuthContext } from "@/contexts/Auth.context";
import { AlertDefault, PopUp } from "@/components/PopUp";
import { Spinner } from "@/components/Spinner";


type SignInScreenProps = StackScreenProps<StackParamList, "signIn">


export function SignIn({navigation}: SignInScreenProps){

	const authContext = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [openPopUp, setOpenPopUp] = useState(false);
	const [alertData, setAlertData] = useState(AlertDefault);
	const [loading, setLoading] = useState(false);


	async function handlerForm(){

		if(!email || !password){
			setOpenPopUp(true);
			setAlertData({
				title: "Atenção",
				message: "Preencha todos os campos.",
				buttons: [{
					title: "Fechar",
					action: () => setOpenPopUp(false)
				}]
			});
			return;
		}


		setLoading(true);
		const response = await authContext?.singIn({email, password});
		setLoading(false);


		if(response){
			setOpenPopUp(true);
			setAlertData({
				title: "Atenção",
				message: response,
				buttons: [{
					title: "Fechar",
					action: () => setOpenPopUp(false)
				}]
			});
		}

		return;
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
						<IconSignIn/>
					</Header>

					<Form>
						<Input
							label="informe seu e-mail"
							placeholder="E-mail"
							keyboardType="text"
							value={email}
							callback={setEmail}
						/>

						<PasswordInput
							label="Informe sua senha"
							placeholder="Digite sua senha aqui"
							value={password}
							callback={setPassword}
						/>

					
					</Form>

					<ButtonSection>
						<CustumButton title="Entrar" action={handlerForm}/>

						<TouchableOpacity
							activeOpacity={0.5}
							onPress={() => navigation.navigate("signUp")}
						>
							<CreateAccount>
								Criar uma conta
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