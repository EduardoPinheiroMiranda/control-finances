import { Container, Header, Form } from "./styles";

// components
import { Input } from "@/components/input";

// icons
import IconSignIn from "../../../assets/svgs/icon-signIn.svg";
import { useState } from "react";


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
			</Form>
		</Container>
	);
}