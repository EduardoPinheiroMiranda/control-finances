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
	const [category, setCategory] = useState();


	useEffect(() => {
		async function startData(){
			setLoadingFinancialData(true);
			await getInitialData();
			setLoadingFinancialData(false);
		}
		startData();
	}, []);


	async function getInitialData(){

		try{

			const [generalSummary, listCategories] = await Promise.all([
				externalCalls.get("/user/generalSummary"),
				externalCalls.get("/category/listCategories")
			]);

			
			const finances = generalSummary.data;
			const categories = listCategories.data;


			if(generalSummary.status !== 200 || listCategories.status !== 200){
				return "Houve um pequeno problema para carregar os dados, tente novamente mais tarde.";
			}
			

			setApplications(finances.applications);
			setInvoice(finances.invoice);
			setCards(finances.cards);
			setMovements(finances.movements);
			setCategory(categories);


			return {
				applications: finances.applications,
				invoice: finances.invoice,
				cards: finances.cards,
				movements: finances.movements
			};

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
			movements,
			category,
			getInitialData
		}}>
			{children}
		</UserContext.Provider>
	);
}