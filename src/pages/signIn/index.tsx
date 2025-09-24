import { Container, Header, Form, ButtonSection, CreateAccount } from "./styles";
import { useState } from "react";
import { TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
// icons
import IconSignIn from "../../../assets/svgs/icon-signIn.svg";
// components
import { Input } from "@/components/Input";
import { PasswordInput } from "@/components/PasswordInput";
import { CustumButton } from "@/components/CustomButton";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "@/@types/auth.routes";


type SignInScreenProps = StackScreenProps<StackParamList, "signIn">


export function SignIn({navigation}: SignInScreenProps){

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


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
						<CustumButton title="Entrar"/>

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
		</Container>
	);
}