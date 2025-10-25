import { ContextProviderProps } from "@/@types/auth.context";
import { UserContextType } from "@/@types/user.context";
import { externalCalls } from "@/services/externalCalls";
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext<UserContextType | undefined>(undefined);


export function UserProvider({children}: ContextProviderProps){

	const [loadingFinancialData, setLoadingFinancialData] = useState(false);
	const [applications, setApplications] = useState();
	const [invoice, setInvoice] = useState();
	const [cards, setCards] = useState();
	const [movements, setMovements] = useState();


	useEffect(() => {
		async function startData(){
			await getInitialData();
		}
		startData();
	}, []);


	async function getInitialData(){

		try{

			setLoadingFinancialData(true);

			const request = await externalCalls.get("/user/generalSummary");
			const response = request.data;


			if(request.status !== 200){
				return "Houve um pequeno problema para carregar os dados, tente novamente mais tarde.";
			}
			

			setApplications(response.applications);
			setInvoice(response.invoice);
			setCards(response.cards);
			setMovements(response.movements);


			setLoadingFinancialData(false);

			return {
				applications: response.applications,
				invoice: response.invoice,
				cards: response.cards,
				movements: response.movements
			};

		}catch{
			setLoadingFinancialData(false);
			return "Houve um pequeno problema para carregar os dados, tente novamente mais tarde.";
		}
	};


	return(
		<UserContext.Provider value={{
			loadingFinancialData,
			applications,
			invoice,
			cards,
			movements,
			getInitialData
		}}>
			{children}
		</UserContext.Provider>
	);
}