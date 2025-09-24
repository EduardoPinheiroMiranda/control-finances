import { Container, Header, Form, ButtonSection, CreateAccount } from "./styles";
import { useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
// icons
import IconSignIn from "../../../assets/svgs/icon-signIn.svg";
// components
import { Input } from "@/components/Input";
import { PasswordInput } from "@/components/PasswordInput";
import { CustumButton } from "@/components/CustomButton";


export function SignIn(){

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


	return(
		<Container>
			<ScrollView
				style={{flex: 1}}
				horizontal={false}
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

					<TouchableOpacity activeOpacity={0.5}>
						<CreateAccount>
							Criar uma conta
						</CreateAccount>
					</TouchableOpacity>
				</ButtonSection>
			</ScrollView>
			
		</Container>
	);
}