import { Modal } from "react-native";
import { Container, Loading } from "./styles";


interface PropsTypes {
    visible: boolean
}


export function Spinner({visible}: PropsTypes){

	return(
		<Modal transparent={true} visible={visible} animationType="slide">
			<Container>
				<Loading/>
			</Container>
		</Modal>
	);
}





