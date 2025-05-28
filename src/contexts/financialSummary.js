import React, { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ExternalCalls } from "../services/externalCalls";


export const FinancialSummaryContext = createContext({});
const externalCalls = new ExternalCalls();


export function FinancialSummaryProvaider({children}){

    const [applications, setApplications] = useState({});
    const [invoice, setInvoice] = useState({});
    const [cards, setCards] = useState({});
    const [movements, setMovements] = useState({});
    const [loadData, setLoadData] = useState(false);


    async function getGeneralSummary(){

        setLoadData(true);

        const token = await AsyncStorage.getItem("userToken");   
        const response = await externalCalls.GET("/user/generalSummary", token, null);
        
    
        setApplications(response.response.applications);
        setInvoice(response.response.invoice);
        setCards(response.response.cards);
        setMovements(response.response.movements);
        setLoadData(false);

        return {
            applications,
            invoice,
            cards,
            movements
        };
    }

    return(
        <FinancialSummaryContext.Provider value={{
            getGeneralSummary,
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