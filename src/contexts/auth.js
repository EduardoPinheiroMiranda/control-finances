import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ExternalCalls } from "../services/externalCalls";


export const AuthContext = createContext({});


export function AuthProvider({children}){

    const [loadingPage, setLoadingPage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [signed, setSigned] = useState(false);
    const [user, setUser] = useState(null);

    const externalCalls = new ExternalCalls();


    useEffect(() => {

        async function automaticLogin(){

            setLoadingPage(true);
            const token = await AsyncStorage.getItem("userToken");
            
            if(!token){
                setLoadingPage(false);
                return;
            }


            const response = await externalCalls.GET("/user/getUserByToken", token, null);
            
            
            if(response.statusCode === 200){
                setUser(response.response);
                setSigned(true);
                setLoadingPage(false);
                return;
            }

            
            await AsyncStorage.removeItem("userToken");
            setLoadingPage(false);
        }

        automaticLogin();
    }, []);

    async function signUp(data){

        setLoading(true);
        const response = await externalCalls.POST("/user/userRegister", null, data);
        setLoading(false);


        return {
            statusCode: response.statusCode,
            msg: response.msg
        }
    }

    async function signIn(data){

        setLoading(true);
        const response = await externalCalls.POST("/user/authenticate", null, data);


        if(response.statusCode !== 200){
            setLoading(false);

            return {
                statusCode: response.statusCode,
                msg: response.msg
            };
        }
    
        setUser(response);
        setSigned(true);
        setLoading(false);
        await AsyncStorage.setItem("userToken", response.response.token);
    
        
        return {
            statusCode: 200,
            msg: ""
        };
    }


    return(
        <AuthContext.Provider value={{
            signUp, 
            signIn, 
            loading,
            loadingPage,
            signed, 
            user
        }}>
            {children}
        </AuthContext.Provider>
    );
}