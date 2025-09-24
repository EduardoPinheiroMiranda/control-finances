import { Container, Header, Form } from "./styles";
import { useState } from "react";
// components
import { Input } from "@/components/Input";
import { PasswordInput } from "@/components/PasswordInput";
// icons
import IconSignIn from "../../../assets/svgs/icon-signIn.svg";


export function SignIn(){

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


	return(
		<Container>
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
		</Container>
	);
}