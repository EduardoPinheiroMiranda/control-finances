import { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { ExternalCalls } from "@/services/externalCalls";
import { AlertDefault, PopUp } from "@/components/PopUp";
import { Spinner } from "@/components/Spinner";
import { ScrollView } from "react-native";
import { InvoiceSelector, Subtitles } from "@/components/InvoiceSelector";
import { Invoice } from "@/@types/user.context";
import { ListInvoiceItem } from "@/components/ListInvoiceItem";
import { UserContext } from "@/contexts/user.context";


export function InvoiceSummary(){

	const userContext = useContext(UserContext);
	const [invoice, setInvoice] = useState(userContext?.invoice);
	const [subtitle, setSubtitle] = useState<Subtitles[] | undefined>();
	const [invoices, setInvocies] = useState<Invoice[] | undefined>();
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
        
	}, []);


	if(!invoice) return;


	function constructionPopUp(params: {alert?: boolean, title?: string, msg: string}){
		setPopUp({
			alert: params.alert ?? true,
			title: params.title ?? "Atenção",
			message: params.msg,
			buttons: [{ title: "Fechar", action: () => setOpenPopUp(false) }]
		});
		setOpenPopUp(true);
	}


	function selectedInvoice(index: number){
		if(invoices) setInvoice(invoices[index]);
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
				<InvoiceSelector
					subtitles={subtitle}
					invoices={invoices}
					invoice={invoice}
					selectedInvoice={selectedInvoice}
				/>
				<ListInvoiceItem
					installments={invoice.installments}
					totalExtraExpense={invoice.totalExtraExpense}
					totalFixedExpense={invoice.totalFixedExpense}
				/>
			</ScrollView>
			<PopUp visible={openPopUp} data={popUp}/>
		</Container>
	);
}