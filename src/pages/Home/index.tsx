import { Container } from "./styles";
import { HeaderHome } from "./HeaderHome";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/Auth.context";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { DrawerParamList } from "@/@types/drawer.routes";
import { Balance } from "./Balance";
import { Shortcuts } from "./Shortcuts";
import { ScrollView } from "react-native";
import { InvoiceDatails } from "./InvoiceDatails";
import { ListCards } from "./ListCards";
import { ListMovements } from "./ListMovements";


type HomeScreenProps = DrawerScreenProps<DrawerParamList, "Home">;

export function Home({navigation}: HomeScreenProps){

	const authContext = useContext(AuthContext);
	const [showValues, setShowValues] = useState(false);


	return(
		<Container>
			<HeaderHome name={authContext?.user.name ?? ""} navigation={navigation.openDrawer}/>
			<ScrollView
				style={{flex: 1}}
				horizontal={false}
				showsVerticalScrollIndicator={false}
			>
				<Balance showValue={showValues} hideValue={setShowValues}/>
				<Shortcuts/>
				<InvoiceDatails spent={80} showValue={showValues}/>
				<ListCards/>
				<ListMovements/>
			</ScrollView>
		</Container>
	);
}