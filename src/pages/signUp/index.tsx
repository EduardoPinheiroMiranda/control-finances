import { Container, Header, Form, ButtonSection, CreateAccount } from "./styles";
import { useState } from "react";
import { TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
// icons
import IconSignUp from "../../../assets/svgs/icon-signUp.svg";
// components
import { Input } from "@/components/Input";
import { PasswordInput } from "@/components/PasswordInput";
import { CustumButton } from "@/components/CustomButton";


export function SignUp(){

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigation = useNavigation();


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
							value={email}
							callback={setEmail}
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
							value={password}
							callback={setPassword}
						/>

					
					</Form>

					<ButtonSection>
						<CustumButton title="Entrar"/>

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
		</Container>
	);
}