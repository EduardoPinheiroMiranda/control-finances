import { ScrollView } from "react-native";
import { Container } from "./styles";


export function InvoiceDetails(){


	return(
		<Container>
			<ScrollView
				horizontal={false}
				showsVerticalScrollIndicator={false}
				style={{flex: 1}}
			>

			</ScrollView>
		</Container>
	);
}