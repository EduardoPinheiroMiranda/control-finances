import { Container } from "./styles";
import { HeaderHome } from "./HeaderHome";
import { useContext } from "react";
import { AuthContext } from "@/contexts/Auth.context";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { DrawerParamList } from "@/@types/drawer.routes";
import { Balance } from "./Balance";


type HomeScreenProps = DrawerScreenProps<DrawerParamList, "Home">;

export function Home({navigation}: HomeScreenProps){

	const authContext = useContext(AuthContext);


	return(
		<Container>
			<HeaderHome name={authContext?.user.name ?? ""} navigation={navigation.openDrawer}/>
			<Balance/>
		</Container>
	);
}