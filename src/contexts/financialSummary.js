import React, { createContext, useState, useContext } from "react";
import { ExternalCalls } from "../services/externalCalls";
import { AuthContext } from "./auth";


export const FinancialSummaryContext = createContext({});
const externalCalls = new ExternalCalls();


export function FinancialSummaryProvider({children}){

    const { signOut } = useContext(AuthContext);
    const [applications, setApplications] = useState({});
    const [invoice, setInvoice] = useState({});
    const [cards, setCards] = useState([]);
    const [movements, setMovements] = useState([]);
    const [loadData, setLoadData] = useState(false);


    async function getData(){

        setLoadData(true);

        const response = await externalCalls.GET("/user/generalSummary", true, null);
        

        if(response.statusCode === 401){
            await signOut();
        }


        setApplications(response.response.applications || {});
        setInvoice(response.response.invoice || {});
        setCards(response.response.cards || []);
        setMovements(response.response.movements || []);

        setLoadData(false);
    }

    return(
        <FinancialSummaryContext.Provider value={{
            getData,
            applications,
            invoice,
            cards,
            movements,
            loadData
        }}>
            {children}
        </FinancialSummaryContext.Provider>
    );
}