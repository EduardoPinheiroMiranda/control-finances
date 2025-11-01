import { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { UserContext } from "@/contexts/user.context";
import { ExternalCalls } from "@/services/externalCalls";
import { AlertDefault, PopUp } from "@/components/PopUp";
import { Spinner } from "@/components/Spinner";
import { ScrollView } from "react-native";


export function InvoiceSummary(){

	const userContext = useContext(UserContext);
	if(!userContext?.invoice) return;

	const [subtitle, setSubtitle] = useState();
	const [invoices, setInvocies] = useState();
	const [selectedInvoice, setSelectedInvoice] = useState(userContext?.invoice);

	const [loading, setLoading] = useState(false);
	const [openPopUp, setOpenPopUp] = useState(false);
	const [popUp, setPopUp] = useState(AlertDefault);


	useEffect(() => {

		async function getData(){

			const externalCalls = new ExternalCalls();

			setLoading(true);
			const response = await externalCalls.GET("/invoice/getAllInvoices");
			setLoading(false);


			if(!response.success){
				return constructionPopUp({msg: response.msg});
			}
                
			setInvocies(response.data.invoices);
			setSubtitle(response.data.subtitles);
			return;
		}

		getData();
        
	}, [userContext?.invoice]);


	function constructionPopUp(params: {alert?: boolean, title?: string, msg: string}){
		setPopUp({
			alert: params.alert ?? true,
			title: params.title ?? "Atenção",
			message: params.msg,
			buttons: [{ title: "Fechar", action: () => setOpenPopUp(false) }]
		});
		setOpenPopUp(true);
	}


	if(loading){
		return(
			<Container>
				<Spinner visible={loading}/>
			</Container>
		);
	}


	return(
		<Container>
			<ScrollView
				style={{flex: 1}}
				horizontal={false}
				showsVerticalScrollIndicator={false}
			>

			</ScrollView>
			<PopUp visible={openPopUp} data={popUp}/>
		</Container>
	);
}