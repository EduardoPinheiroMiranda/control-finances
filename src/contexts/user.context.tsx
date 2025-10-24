import { ContextProviderProps } from "@/@types/auth.context";
import { Application, Card, Invoice, Movement, UserContextType } from "@/@types/user.context";
import { externalCalls } from "@/services/externalCalls";
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext<UserContextType | undefined>(undefined);


export function UserProvider({children}: ContextProviderProps){

	const [loadingFinancialData, setLoadingFinancialData] = useState(false);
	const [applications, setApplications] = useState<Application | null>(null);
	const [invoice, setInvoice] = useState<Invoice | null>(null);
	const [cards, setCards] = useState<Card | null>(null);
	const [movements, setMovements] = useState<Movement | null>(null);


	useEffect(() => {

		async function loadData(){
			setLoadingFinancialData(true);
			await getInitialData();
			setLoadingFinancialData(false);
		}
		loadData();
		
		
	}, []);


	async function getInitialData(){

		try{

			const request = await externalCalls.get("/user/generalSummary");
			const response = request.data;

			if (response.applications) setApplications(response.applications);
			if (response.invoice) setInvoice(response.invoice);
			if (response.cards) setCards(response.cards);
			if (response.movements) setMovements(response.movements);

			return;
            
		}catch{
			return "Houve um pequeno problema para carregar os dados, tente novamente mais tarde.";
		}
	};


	return(
		<UserContext.Provider value={{
			loadingFinancialData,
			applications,
			invoice,
			cards,
			movements
		}}>
			{children}
		</UserContext.Provider>
	);
}