import React, { createContext, useMemo, useState, useContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
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


    useEffect(() => {

        async function getData(){

            setLoadData(true);

            const token = await AsyncStorage.getItem("userToken");
            const response = await externalCalls.GET("/user/generalSummary", token, null);
            

            if(response.statusCode === 401){
                await signOut();
            }


            setApplications(response.response.applications || {});
            setInvoice(response.response.invoice || {});
            setCards(response.response.cards || []);
            setMovements(response.response.movements || []);

            setLoadData(false);

        }
        getData();

    }, []);

    return(
        <FinancialSummaryContext.Provider value={{
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