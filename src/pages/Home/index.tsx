import { Container } from "./styles";
import { useContext, useEffect, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { AuthContext } from "@/contexts/Auth.context";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { DrawerParamList } from "@/@types/drawer.routes";
import { UserContext } from "@/contexts/user.context";

// components
import { Spinner } from "@/components/Spinner";
import { HeaderHome } from "./HeaderHome";
import { Balance } from "./Balance";
import { Shortcuts } from "./Shortcuts";
import { InvoiceDatails } from "./InvoiceDatails";
import { ListCards } from "./ListCards";
import { ListMovements } from "./ListMovements";
import AsyncStorage from "@react-native-async-storage/async-storage";


type HomeScreenProps = DrawerScreenProps<DrawerParamList, "Home">;


export function Home({navigation}: HomeScreenProps){

	const authContext = useContext(AuthContext);
	const userContext = useContext(UserContext);
	const [showValues, setShowValues] = useState(false);
	const [elevation, setElevation] = useState(false);
	const [refreshPage, setRefreshPage] = useState(false);


	useEffect(() => {
		async function startData(){
			if(!userContext?.applications || !userContext.invoice){
				await userContext?.getInitialData();
			}

			const hidderValue = await AsyncStorage.getItem("showValue");
			if(hidderValue){
				setShowValues(hidderValue === "true" ? true : false);
			}
		}
		startData();
	}, []);


	async function handlerHidderValue(){
		setShowValues(!showValues);
		await AsyncStorage.setItem("showValue", String(!showValues))
	}


	if (!userContext?.invoice || !userContext.cards || !userContext.movements) return;

	
	if(userContext?.loadingFinancialData){
		return(
			<Container>
				<Spinner visible={true}/>
			</Container>
		);
	}


	return(
		<Container>
			<HeaderHome
				elevation={elevation}
				name={authContext?.user.name ?? ""}
				navigation={navigation.openDrawer}
			/>
			<ScrollView
				style={{flex: 1}}
				horizontal={false}
				showsVerticalScrollIndicator={false}
				refreshControl={ <RefreshControl
					refreshing={refreshPage}
					onRefresh={ async () => {
						setRefreshPage(true);
						await userContext.getInitialData();
						setRefreshPage(false);
					}}
				/> }
				onScroll={(event) => {
					const y = event.nativeEvent.contentOffset.y;
					setElevation(y > 95 ? true : false);
				}}
			>
				<Balance showValue={showValues} value={userContext?.applications?.value ?? 0} hideValue={handlerHidderValue}/>
				<Shortcuts/>
				<InvoiceDatails invoice={userContext.invoice} showValue={showValues}/>
				<ListCards cards={userContext.cards}/>
				<ListMovements movements={userContext.movements}/>
			</ScrollView>
		</Container>
	);
}