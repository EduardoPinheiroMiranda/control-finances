import { Modal } from "react-native";
import { Body, Container, Title, Message, ButtonSection, AlertIcon, TextTitle, TextMessage, Button, TextButton } from "./styles";


export const AlertDefault = {
	alert: false,
	title: "",
	message: "",
	buttons: [{
		title: "",
		action: () => {},
	}]
};


export interface PropsTypes {
    visible: boolean,
    data: {
		alert: boolean,
        title: string,
        message: string,
		buttons: {
			title: string,
			action: () => void
		}[]
    }
}

export function PopUp({visible, data}: PropsTypes){


	return(
		<Modal transparent={true} visible={visible} animationType="slide">
			<Container>
				<Body>
					<Title alert={data.alert}>
						{data.alert && <AlertIcon/>}
						<TextTitle>{data.title}</TextTitle>
					</Title>

					<Message>
						<TextMessage>{data.message}</TextMessage>
					</Message>

					<ButtonSection>
						{data.buttons.map((button, index) => {
							return(
								<Button
									key={index}
									onPress={() => button.action()}
									activeOpacity={0.7}
									quantity={data.buttons.length}
									position={index === 0 ? "left" : "right"}
								>
									<TextButton>{button.title}</TextButton>
								</Button>
							);
						})}
					</ButtonSection>
				</Body>
			</Container>
		</Modal>
	);
}