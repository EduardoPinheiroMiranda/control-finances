import { useState } from "react";
import { Container } from "./styles";
// components
import { FormAddCard } from "@/components/FormAddCard";
import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { TouchableOpacity } from "react-native";


export function AddCard(){

	const [name, setName] = useState("");
	const [dueDay, setDueDay] = useState(0);
	const [closingDay, setClosingDay] = useState(0);
	const [colorFont, setColorFont] = useState("");
	const [colorBackground, setColorBackground] = useState("");
	

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
					<FormAddCard
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
					/>
				</KeyboardAvoidingView>
			</TouchableOpacity>		
		</Container>
	);
}