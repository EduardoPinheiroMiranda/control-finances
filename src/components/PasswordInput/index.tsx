import React, { useState } from "react";
import { Container, TextInput, Text, IconSection } from "./styles";
import { Pressable, View } from "react-native";
// icon
import EyeClose from "../../../assets/svgs/eye-close.svg";
import EyeOpen from "../../../assets/svgs/eye-open.svg";
import {  } from "react-native";


interface PropsTypes{
	label: string,
	placeholder: string,
	value: string | number,
	callback:  React.Dispatch<React.SetStateAction<string>>
}


export function PasswordInput(props: PropsTypes){

	const [showPassword, setShowPassword] = useState(true);


	return(
		<Container>
			<Text>{props.label}</Text>

			<View>
				<TextInput
					placeholder={props.placeholder}
					keyboardType="Text"
					value={props.value}
					onChangeText={(value: string) => props.callback(value)}
					secureTextEntry={showPassword}
				/>

				<IconSection>
					<Pressable onPress={() => setShowPassword(!showPassword)}>
						{showPassword ? <EyeClose/> : <EyeOpen/> }
					</Pressable>
				</IconSection>
			</View>
		</Container>
	);
}